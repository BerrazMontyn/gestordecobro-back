const Payments = require("../models/Payments");

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

module.exports = {
  createPayment,
  getPaymentId,
};
