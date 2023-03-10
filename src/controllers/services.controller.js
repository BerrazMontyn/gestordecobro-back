const { response } = require("express");
const { Services, Companies } = require("../database.js");

const createService = async (req, res = response) => {
  try {
    const { name } = req.body;

    const serviceFound = await Services.findOne({ where: { name: name } });
    if (serviceFound) {
      res.status(409).send({ msg: "El servicio ya existe" });
    }
    const service = await Services.create({ name });
    res.status(201).json({ msg: "Servicio creado", service });

  } catch (error) {
    console.log("ERROR en createService");
    res.status(500).send({ msg: error.message });
  }
};

const getServices = async (req, res = response) => {
  try {
    const allServices = await Services.findAll({
      include: {
        model: Companies,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    if (!allServices.length) {
      return res.json({ msg: "No hay servicios", allServices });
    }
    res.json({ msg: "Todos los servicios", allServices });

  } catch (error) {
    console.log("ERROR en getServices");
    res.status(500).send({ msg: error.message });
  }
};

const updateService = async (req, res = response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const serviceFound = await Services.findByPk(id);
    if (!serviceFound) {
      return res.status(404).send({ msg: "El servicio no existe" });
    }
    await serviceFound.update({ name });
    res.json({ msg: "Servicio actualizado", serviceFound });

  } catch (error) {
    console.log("ERROR en updateService");
    res.status(500).send({ msg: error.message });
  }
};

const deleteService = async (req, res = response) => {
  try {
    const { id } = req.params;

    const serviceFound = await Services.findByPk(id);
    if (!serviceFound) {
      return res.status(404).send({ msg: "El servicio no existe" });
    }
    await serviceFound.destroy();
    res.send({ msg: "Servicio eliminado" });
    
  } catch (error) {
    console.log("ERROR en deleteService");
    res.status(500).send({ msg: error.message });
  }
};

module.exports = {
  createService,
  getServices,
  updateService,
  deleteService,
};
