const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config');

const { AirplaneService } = require('../services');
const successResponse = require('../utils/common/success.response');
const { query } = require('express');


/**
 * POST Request /api/v1/airplanes
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
            .status(successResponse.statusCode)
            .json(successResponse);
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

        successResponse.data = airplanes;
        successResponse.message = "Successfully fetched Airplanes";
        successResponse.statusCode = StatusCodes.OK;

        return res
            .status(successResponse.statusCode)
            .json(successResponse);
    }
    catch (error) {
        next(error);
    }
}

async function getAirplane(req, res, next) {

    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);

        successResponse.data = airplane;
        successResponse.message = "Successfully fetched Airplane";
        successResponse.statusCode = StatusCodes.OK;

        return res
            .status(successResponse.statusCode)
            .json(successResponse);
    }
    catch (error) {
        next(error);
    }
}

async function destroyAirplane(req, res, next) {

    try {
        successResponse.data = await AirplaneService.getAirplane(req.params.id);

        const airplane = await AirplaneService.destroyAirplane(req.params.id);

        successResponse.message = "Successfully deleted Airplane";
        successResponse.statusCode = StatusCodes.OK;

        return res
            .status(successResponse.statusCode)
            .json(successResponse);
    }
    catch (error) {
        next(error);
    }
}


async function updateAirplane(req, res, next) {

    try {
        const airplane = await AirplaneService.updateAirplane(req.params.id, {
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });

        successResponse.data = await AirplaneService.getAirplane(req.params.id);
        successResponse.message = "Successfully update Airplane object";
        successResponse.statusCode = StatusCodes.OK;

        return res
            .status(successResponse.statusCode)
            .json(successResponse);
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