const { Router } = require("express");
const {
  createPayment,
  getPaymentId,
  getPayment,
  editPayment,
} = require("../controllers/payments.controllers");

const router = Router();

router.post("/", createPayment);
router.get("/", getPayment);
router.get("/:id", getPaymentId);
router.put("/:id", editPayment);

module.exports = router;
