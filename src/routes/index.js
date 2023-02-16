const { Router } = require("express");
const categories = require("./categories.routes");
const customers = require("./customers.routes");

const router = Router();

router.use("/categories", categories);
router.use("/customers", customers);

module.exports = router;
