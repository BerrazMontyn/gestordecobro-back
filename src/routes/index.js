const { Router } = require("express");
const categories = require("./categories.routes");

const router = Router();

router.use("/categories", categories);

module.exports = router;
