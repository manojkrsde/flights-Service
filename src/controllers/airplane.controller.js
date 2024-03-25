const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config');

const { AirplaneService } = require('../services');
const successResponse = require('../utils/common/success.response');


/**
 * POST Request
 * Request Body -> {modelNumber:"airbus a330", capacity:180}
 */

async function createAirplane(req, res, next) {

    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });

        successResponse.data = airplane;
        successResponse.message = "Successfully created Airplane object";
        successResponse.statusCode = StatusCodes.CREATED;

        return res
            .status(StatusCodes.CREATED)
            .json(successResponse);
    }
    catch (error) {
        next(error);
    }
}

module.exports = createAirplane;