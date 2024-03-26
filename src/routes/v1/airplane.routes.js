const express = require('express');
const { AirplaneController } = require('../../controllers/');
const { AirplaneMiddlewares } = require('../../middlewares');

const router = express.Router();

/**
 * /api/v1/airplanes : POST
 */
router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane
);

/**
 * /api/v1/airplanes : Get
 */

router.get('/', AirplaneController.getAirplanes);

/**
 * /api/v1/airplanes/:id : Get
 */

router.get('/:id', AirplaneController.getAirplane);


/**
 * /api/v1/airplanes/:id : delete
 */
router.delete('/:id', AirplaneController.destroyAirplane);

/**
 * /api/v1/airplanes/:id : PATCH
 */
router.put('/:id',
    AirplaneController.updateAirplane);

module.exports = router;