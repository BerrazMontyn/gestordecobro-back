const { Router } = require("express");
const {
  createPayment,
  getPaymentId,
  getPayment,
  editPayment,
  deletePayment,
} = require("../controllers/payments.controllers");

const router = Router();

router.post("/", createPayment);
router.get("/", getPayment);
router.get("/:id", getPaymentId);
router.put("/:id", editPayment);
router.delete("/:id", deletePayment);

module.exports = router;
