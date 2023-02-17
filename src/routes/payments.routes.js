const { Router } = require("express");
const { createPayment } = require("../controllers/payments.controllers");

const router = Router();

router.post("/", createPayment);

module.exports = router;
