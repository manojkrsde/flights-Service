const express = require('express');
const { AirplaneController } = require('../../controllers/');
const { AirplaneMiddlewares } = require('../../middlewares');

const router = express.Router();

//api/v1/ping
router.post('/', AirplaneMiddlewares, AirplaneController);

module.exports = router;