const { Router } = require("express");
const services = require("./services.routes");
const customers = require("./customers.routes");
const admin = require("./admin.routes");
const payments = require("./payments.routes");
const companies = require("./companies.routes");

const router = Router();

router.use("/services", services);
router.use("/customers", customers);
router.use("/payments", payments);
router.use("/companies", companies);
router.use("/admin", admin);

module.exports = router;
