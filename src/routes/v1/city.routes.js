const express = require('express');
const { CityController, pingCheck } = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares');

const cityRouter = express.Router();



cityRouter.get('/ping', pingCheck);

/**
 * POST request
 * /api/v1/cities
 */
cityRouter.post('/',
    CityMiddlewares.validateCreateRequest,
    CityController.createCity);

/**
* GET request
* /api/v1/cities
*/
cityRouter.get('/', CityController.getCities);


/**
* GET request
* /api/v1/cities/:id
*/
cityRouter.get('/:id', CityController.getCity);


/**
 * DELETE request
 * /api/v1/cities/:id 
 */
cityRouter.delete('/:id', CityController.destroyCity);

/**
 * PATCH request
 * /api/v1/cities/:id 
 */
cityRouter.patch('/:id',
    CityController.updateCity);


module.exports = cityRouter;