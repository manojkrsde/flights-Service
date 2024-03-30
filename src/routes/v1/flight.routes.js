const express = require('express');
const { FlightController, pingCheck } = require('../../controllers/');
const { FlightMiddlewares } = require('../../middlewares');


const flightRoutes = express.Router();


/**
 * /api/v1/flights/ping
 */
flightRoutes.get('/ping', pingCheck);

/**
 * POST Request
 * /api/v1/flights/ 
 */
flightRoutes.post('/',
    FlightMiddlewares.validateCreateRequest,
    FlightController.createFlight
);



/**
 * GET Request
 * /api/v1/flights/? --query params possible
 */
flightRoutes.get('/',
    FlightController.getAllFlights
);

module.exports = flightRoutes;