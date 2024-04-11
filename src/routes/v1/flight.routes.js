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


/**
 * GET Request
 * /api/v1/flights/:id
 */
flightRoutes.get('/:id',
    FlightController.getFlight
);


/**
 * Patch Request
 * /api/v1/flights/:id/seats
 */
flightRoutes.patch('/:id/seats',
    FlightMiddlewares.validateUpdateRequest,
    FlightController.updateSeats
);


module.exports = flightRoutes;