const { Router } = require("express");
const { createCompany } = require("../controllers/companies.controller");

const router = Router();

router.post("/", createCompany);

module.exports = router;
