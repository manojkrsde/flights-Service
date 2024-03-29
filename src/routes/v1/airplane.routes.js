const express = require('express');
const { AirplaneController, pingCheck } = require('../../controllers/');
const { AirplaneMiddlewares } = require('../../middlewares');

const airplaneRouter = express.Router();

/**
 * /api/v1/airplanes/ping
 */
airplaneRouter.get('/ping', pingCheck);

/**
 * /api/v1/airplanes : POST
 */
airplaneRouter.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane
);

/**
 * /api/v1/airplanes : Get
 */

airplaneRouter.get('/', AirplaneController.getAirplanes);

/**
 * /api/v1/airplanes/:id : Get
 */

airplaneRouter.get('/:id', AirplaneController.getAirplane);


/**
 * /api/v1/airplanes/:id : delete
 */
airplaneRouter.delete('/:id', AirplaneController.destroyAirplane);

/**
 * /api/v1/airplanes/:id : PATCH
 */
airplaneRouter.patch('/:id',
    AirplaneController.updateAirplane);

module.exports = airplaneRouter;