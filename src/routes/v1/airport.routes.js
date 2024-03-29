const express = require('express');
const { AirportController, pingCheck } = require('../../controllers');

const airportRouter = express.Router();


/**
 * Ping check : /api/v1/airports/ping
 */

airportRouter.get('/ping', pingCheck);


/**
 * /api/v1/airplanes : POST
 */
airportRouter.post('/',
    AirportController.createAirport
);

/**
 * /api/v1/airplanes : Get
 */

airportRouter.get('/', AirportController.getAirports);

/**
 * /api/v1/airplanes/:id : Get
 */

airportRouter.get('/:id', AirportController.getAirport);


/**
 * /api/v1/airplanes/:id : delete
 */
airportRouter.delete('/:id', AirportController.destroyAirport);

/**
 * /api/v1/airplanes/:id : PATCH
 */
airportRouter.patch('/:id',
    AirportController.updateAirport);



module.exports = airportRouter;