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

//__________________________________________________________________//

module.exports = {
  createPayment,
};
