const { Customers } = require("../database");

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

const getCustomer = async (req, res) => {
  try {
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
  editCustomer,
  deleteCustomer,
};
