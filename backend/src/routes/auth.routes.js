const express = require("express");
const cors = require("cors")

const authController = require("../controllers/auth.controller")

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login)

module.exports = router;