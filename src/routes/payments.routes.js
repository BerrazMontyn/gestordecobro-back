const { Router } = require("express");
const {
  createPayment,
  getPaymentId,
  getPayment,
} = require("../controllers/payments.controllers");

const router = Router();

router.post("/", createPayment);
router.get("/", getPayment);
router.get("/:id", getPaymentId);

module.exports = router;
