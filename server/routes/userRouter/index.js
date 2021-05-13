const express = require("express");
const router = express.Router();

const TestController = require("./controller");

router.get("/", TestController.test);

module.exports = router;