const { Router } = require("express");
const { createCategory, getCategories } = require("../controllers/categories.controller");

const router = Router();

router.post("/", createCategory);
router.get("/", getCategories);

module.exports = router;
