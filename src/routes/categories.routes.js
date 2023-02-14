const { Router } = require("express");
const { createCategorie, getCategories } = require("../controllers/categories.controller");

const router = Router();

router.post("/", createCategorie);
router.get("/", getCategories);

module.exports = router;
