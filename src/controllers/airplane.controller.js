const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');
const { SuccessResponse } = require('../utils/common/');


/**
 * POST Request /api/v1/airplanes
 * Request Body -> {modelNumber:"airbus a330", capacity:180}
 */

async function createAirplane(req, res, next) {

    try {
        const airplane = await AirplaneService.createAirplane({
            name: req.body.name,
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });

        SuccessResponse.data = airplane;
        SuccessResponse.message = "Successfully created Airplane object";
        SuccessResponse.statusCode = StatusCodes.CREATED;

        return res
            .status(SuccessResponse.statusCode)
            .json(SuccessResponse);
    }
    catch (error) {
        next(error);
    }
}

/**
 * GET Request /api/v1/airplanes
 * Request Body -> {}
 */

async function getAirplanes(req, res, next) {

    try {
        const airplanes = await AirplaneService.getAirplanes();

        SuccessResponse.data = airplanes;
        SuccessResponse.message = "Successfully fetched Airplanes";
        SuccessResponse.statusCode = StatusCodes.OK;

        return res
            .status(SuccessResponse.statusCode)
            .json(SuccessResponse);
    }
    catch (error) {
        next(error);
    }
}

/**
 * GET Request /api/v1/airplanes/:id
 * Request Body -> {}
 */

async function getAirplane(req, res, next) {

    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);

        SuccessResponse.data = airplane;
        SuccessResponse.message = "Successfully fetched Airplane";
        SuccessResponse.statusCode = StatusCodes.OK;

        return res
            .status(SuccessResponse.statusCode)
            .json(SuccessResponse);
    }
    catch (error) {
        next(error);
    }
}

/**
 * Delete Request /api/v1/airplanes/:id
 * Request Body -> {}
 */

async function destroyAirplane(req, res, next) {

    try {

        const airplane = await AirplaneService.destroyAirplane(req.params.id);

        SuccessResponse.data = airplane;
        SuccessResponse.message = "Successfully deleted Airplane";
        SuccessResponse.statusCode = StatusCodes.OK;

        return res
            .status(SuccessResponse.statusCode)
            .json(SuccessResponse);
    }
    catch (error) {
        next(error);
    }
}

/**
 * PUT Request /api/v1/airplanes/:id
 * Request Body -> {modelNumber:"New value", capacity:"New value"}, we can also leave these fileds
 */
async function updateAirplane(req, res, next) {

    try {
        const airplane = await AirplaneService.updateAirplane(req.params.id, {
            name: req.body.name,
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });

        SuccessResponse.data = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.message = "Successfully updated Airplane object";
        SuccessResponse.statusCode = StatusCodes.OK;

        return res
            .status(SuccessResponse.statusCode)
            .json(SuccessResponse);
    }
    catch (error) {
        next(error);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
};