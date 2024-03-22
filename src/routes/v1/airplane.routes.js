const express = require('express');
const { AirplaneController } = require('../../controllers/');

const router = express.Router();

//api/v1/ping
router.post('/', AirplaneController);

module.exports = router;