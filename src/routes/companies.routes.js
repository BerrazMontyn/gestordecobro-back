const { Router } = require("express");
const { createCompany, getCompanies } = require("../controllers/companies.controller");

const router = Router();

router.post("/", createCompany);
router.get("/", getCompanies);

module.exports = router;
