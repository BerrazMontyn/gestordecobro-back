const { Router } = require("express");
const {
  createPayment,
  getPaymentId,
} = require("../controllers/payments.controllers");

const router = Router();

router.post("/", createPayment);
router.get("/:id", getPaymentId);

module.exports = router;
