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
router.put("/:id", editCustomer);
router.delete("/:id", deleteCustomer);

module.exports = router;
