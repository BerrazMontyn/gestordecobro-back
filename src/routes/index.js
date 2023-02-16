const { Router } = require("express");
const categories = require("./categories.routes");
const customers = require("./customers.routes");
const admin = require("./admin.routes");

const router = Router();

router.use("/categories", categories);
router.use("/customers", customers);
router.use("/admin", admin);

module.exports = router;
