const { Payments } = require("../database");
const { Op } = require("sequelize");

//__________________________________________________________________//

const createPayment = async (req, res) => {
  try {
    let { name, detail, expirationDate } = req.body;

    let newPayment = await Payments.create({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      detail,
      expirationDate,
    });

    return res
      .status(200)
      .send({ message: "Successfully created", newPayment });
  } catch (error) {
    console.error("Error in createPayment", error);
  }
};

//__________________________________________________________________//

const getPaymentId = async (req, res) => {
  try {
    if (req.params.id) {
      let payment = Payments.findByPk(req.param.id);
      return res.res(200).send({ message: "Successful search", payment });
    }
  } catch (error) {
    console.error("Error in getPaymentId", error);
  }
};

//__________________________________________________________________//

const getPayment = async (req, res) => {
  try {
    if (req.query.name) {
      let payment = Payments.findAll({
        where: {
          name: { [Op.iLike]: `%${req.query.name}%` },
        },
      });

      return res.status(200).send({ message: "Successful search", payment });
    } else {
      let payment = Payments.findAll();

      return res.status(200).send({ message: "Successful search", payment });
    }
  } catch (error) {
    console.error("Error in getPayment", error);
  }
};

//__________________________________________________________________//

const editPayment = async (req, res) => {
  try {
    await Payments.update(req.body, {
      where: { id: req.params.id },
    });
    return res.status(200).send({ msj: "Successfully edited" });
  } catch (error) {
    console.error("Error in editPayment", error);
  }
};

//__________________________________________________________________//

const deletePayment = async (req, res) => {
  try {
    await Payments.destroy({ where: { id: req.params.id } });
    return res.status(200).send("Successfully eliminated");
  } catch (error) {
    console.error("Error in deletePayment", error);
  }
};

//__________________________________________________________________//

module.exports = {
  createPayment,
  getPaymentId,
  getPayment,
  editPayment,
  deletePayment,
};
