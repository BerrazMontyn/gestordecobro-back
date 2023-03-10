const { Coupons, Customers, Companies } = require("../database");
const { Op } = require("sequelize");

//__________________________________________________________________//

const createCoupon = async (req, res) => {
  try {
    let { expirationDate, paid, customer, company } = req.body;

    let newCoupon = await Coupons.create({
      expirationDate,
      paid,
    });

    let couponOfCustomer = await Customers.findAll({
      where: { name: customer },
    });
    let couponOfCompany = await Companies.findAll({
      where: { name: company },
    });

    await newCoupon.addCustomers(couponOfCustomer);
    await newCoupon.addCompanies(couponOfCompany);

    return res.status(200).send({ message: "Successfully created", newCoupon });
  } catch (error) {
    console.error("Error in createCoupon", error);
  }
};

//__________________________________________________________________//

const getCouponId = async (req, res) => {
  try {
    if (req.params.id) {
      let coupon = Coupons.findByPk(req.param.id);
      return res.res(200).send({ message: "Successful search", coupon });
    }
  } catch (error) {
    console.error("Error in getCouponId", error);
  }
};

//__________________________________________________________________//

const getCoupon = async (req, res) => {
  try {
    if (req.query.name) {
      let coupon = Coupons.findAll({
        where: {
          name: { [Op.iLike]: `%${req.query.name}%` },
        },
      });

      return res.status(200).send({ message: "Successful search", coupon });
    } else {
      let coupon = Coupons.findAll({
        include: [{ model: Customers }, { model: Companies }],
      });

      return res.status(200).send({ message: "Successful search", coupon });
    }
  } catch (error) {
    console.error("Error in getCoupon", error);
  }
};

//__________________________________________________________________//

const editCoupon = async (req, res) => {
  try {
    await Coupons.update(req.body, {
      where: { id: req.params.id },
    });
    return res.status(200).send({ msj: "Successfully edited" });
  } catch (error) {
    console.error("Error in editCoupons", error);
  }
};

//__________________________________________________________________//

const deleteCoupon = async (req, res) => {
  try {
    await Coupons.destroy({ where: { id: req.params.id } });
    return res.status(200).send("Successfully eliminated");
  } catch (error) {
    console.error("Error in deleteCoupon", error);
  }
};

//__________________________________________________________________//

module.exports = {
  createCoupon,
  getCouponId,
  getCoupon,
  editCoupon,
  deleteCoupon,
};
