const { Customers } = require("../database");
const { Op } = require("sequelize");

//__________________________________________________________________//

const createCustomer = async (req, res) => {
  try {
    let { name, identityCard, address, email, cellPhone } = req.body;

    let newCustomer = await Customers.create({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      identityCard,
      address,
      email,
      cellPhone,
    });

    return res
      .status(200)
      .json({ msj: "Customer successfully created", newCustomer });
  } catch (error) {
    console.error("Error in createCustomer", error);
  }
};

//__________________________________________________________________//

const getCustomerId = async (req, res) => {
  try {
    if (req.params.id) {
      let customer = await Customers.findByPk(req.params.id);
      return res.status(200).send(customer);
    }
  } catch (error) {
    console.error("Error en getCustomerId", error);
  }
};
//__________________________________________________________________//

const getCustomer = async (req, res) => {
  try {
    if (req.query.name) {
      let customer = await Customers.findAll({
        where: {
          name: { [Op.iLike]: `%${req.query.name}%` },
        },
      });
      return res.status(200).send(customer);
    } else {
      let customer = await Customers.findAll();
      return res.status(200).send(customer);
    }
  } catch (error) {
    console.error("Error en getCustomer", error);
  }
};

//__________________________________________________________________//

const editCustomer = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error en editCustomer", error);
  }
};

//__________________________________________________________________//

const deleteCustomer = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error en deleteCustomer", error);
  }
};

//__________________________________________________________________//

module.exports = {
  createCustomer,
  getCustomer,
  getCustomerId,
  editCustomer,
  deleteCustomer,
};
