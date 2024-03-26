const express = require('express');
const { pingCheck } = require('../../controllers/');

const airplaneRouter = require('./airplane.routes');
const cityRouter = require('./city.routes');

const router = express.Router();

//api/v1/airplanes
router.use('/airplanes', airplaneRouter);

//api/v1/cities
router.use('/cities', cityRouter);

//api/v1/ping
router.get('/ping', pingCheck);

module.exports = router;