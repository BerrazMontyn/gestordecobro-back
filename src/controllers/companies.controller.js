const { response } = require("express");
const { Companies, Services } = require("../database.js");

const createCompany = async (req, res = response) => {
  try {
    const { name, services } = req.body;

    const companyFound = await Companies.findOne({ where: { name: name } });
    if (companyFound) {
      res.status(409).send({ msg: "La empresa ya existe" });
    }

    const company = await Companies.create({ name });
    const servicesDB = await Services.findAll({
      where: { name: services },
    });
    await company.addServices(servicesDB);
    res.status(201).json({ msg: "Empresa creada", company });

  } catch (error) {
    console.log("ERROR en createCompany");
    res.status(500).send({ msg: error.message });
  }
};

module.exports = {
  createCompany,
};
