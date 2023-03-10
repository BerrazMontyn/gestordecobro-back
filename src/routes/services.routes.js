const { Router } = require("express");
const {
  createService,
  getServices,
  updateService,
  deleteService,
} = require("../controllers/services.controller");

const router = Router();

router.post("/", createService);
router.get("/", getServices);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

module.exports = router;
