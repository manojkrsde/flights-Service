const express = require('express');
const { FlightController, pingCheck } = require('../../controllers/');
const { FlightMiddlewares } = require('../../middlewares');


const flightRoutes = express.Router();


/**
 * /api/v1/airplanes/ping
 */
flightRoutes.get('/ping', pingCheck);

/**
 * /api/v1/airplanes : POST
 */
flightRoutes.post('/',
    FlightMiddlewares.validateCreateRequest,
    FlightController.createFlight
);


module.exports = flightRoutes;