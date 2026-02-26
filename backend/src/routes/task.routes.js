const express = require("express");
const cors = require("cors");
const router = express.Router();
const taskControllers = require("../controllers/task.controller");

router.get("/", taskControllers.list);
router.post("/", taskControllers.create);
router.put("/:id", taskControllers.update);
router.delete("/:id", taskControllers.remove);

module.exports = router;