const { Customers, Categories } = require("../database");
const { Op } = require("sequelize");

//__________________________________________________________________//

const createCustomer = async (req, res) => {
  try {
    let { name, identityCard, address, email, cellPhone, categories } =
      req.body;

    let newCustomer = await Customers.create({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      identityCard,
      address,
      email,
      cellPhone,
    });

    let categoriesOfCustomers = await Categories.findAll({
      where: { name: categories },
    });

    await newCustomer.addCategories(categoriesOfCustomers);

    return res
      .status(200)
      .send({ message: "Successfully created", newCustomer });
  } catch (error) {
    console.error("Error in createCustomer", error);
  }
};

//__________________________________________________________________//

const getCustomerId = async (req, res) => {
  try {
    if (req.params.id) {
      let customer = await Customers.findByPk(req.params.id);
      return res.status(200).send({ message: "Successful search", customer });
    }
  } catch (error) {
    console.error("Error in getCustomerId", error);
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
        include: { model: Categories },
      });
      return res.status(200).send({ message: "Successful search", customer });
    } else {
      let customer = await Customers.findAll({
        order: [[req.query.property, req.query.order]],
      });
      return res.status(200).send({ message: "Successful search", customer });
    }
  } catch (error) {
    console.error("Error in getCustomer", error);
  }
};

//__________________________________________________________________//

const editCustomer = async (req, res) => {
  try {
    await Customers.update(req.body, {
      where: { id: req.params.id },
    });
    return res.status(200).send({ msj: "Successfully edited" });
  } catch (error) {
    console.error("Error in editCustomer", error);
  }
};

//__________________________________________________________________//

const deleteCustomer = async (req, res) => {
  try {
    await Customers.destroy({ where: { id: req.params.id } });
    return res.status(200).send("Successfully eliminated");
  } catch (error) {
    console.error("Error in deleteCustomer", error);
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
