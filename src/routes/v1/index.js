const express = require('express');
const { pingCheck } = require('../../controllers/');

const airplaneRouter = require('./airplane.routes');
const router = express.Router();

//api/v1/airplanes
router.use('/airplanes', airplaneRouter);

//api/v1/ping
router.get('/ping', pingCheck);

module.exports = router;