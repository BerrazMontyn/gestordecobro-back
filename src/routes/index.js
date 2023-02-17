const { Router } = require("express");
const Payments = require("../models/Payments");
const categories = require("./categories.routes");
const customers = require("./customers.routes");

const router = Router();

router.use("/categories", categories);
router.use("/customers", customers);
router.use("/payments", Payments);

module.exports = router;
