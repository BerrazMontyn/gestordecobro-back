const { Router } = require("express");
const {
  createCustomer,
  getCustomer,
  editCustomer,
  deleteCustomer,
} = require("../controllers/customers.controllers");

const router = Router();

router.post("/", createCustomer);
router.get("/", getCustomer);
router.put("/", editCustomer);
router.delete("/", deleteCustomer);

module.exports = router;
