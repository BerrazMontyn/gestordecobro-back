const { Router } = require("express");
const {
  createCustomer,
  getCustomer,
  editCustomer,
  deleteCustomer,
  getCustomerId,
} = require("../controllers/customers.controllers");

const router = Router();

router.post("/", createCustomer);
router.get("/", getCustomer);
router.get("/:id", getCustomerId);
router.put("/", editCustomer);
router.delete("/", deleteCustomer);

module.exports = router;
