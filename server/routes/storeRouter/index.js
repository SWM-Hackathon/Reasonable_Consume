const express = require('express');
const router = express.Router();
const Controller = require("./controller");

/* GET all store informations */
router.get('/all', Controller.getStoreAll);

/* GET one store informations by index */
router.get('/detail', Controller.getStoreDetail);

module.exports = router;