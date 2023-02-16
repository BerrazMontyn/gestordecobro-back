const { Router } = require("express");
const { createCategory, getCategories, updateCategory, deleteCategory } = require("../controllers/categories.controller");

const router = Router();

router.post("/", createCategory);
router.get("/", getCategories);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
