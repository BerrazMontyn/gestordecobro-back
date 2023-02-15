const { Router } = require("express");
const { createCategory, getCategories, updateCategory } = require("../controllers/categories.controller");

const router = Router();

router.post("/", createCategory);
router.get("/", getCategories);
router.put("/:id", updateCategory)

module.exports = router;
