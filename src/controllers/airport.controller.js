
const { StatusCodes } = require("http-status-codes");
const { AirportService } = require("../services");
const successResponse = require("../utils/common/success.response");

/**
 * POST Request : /api/v1/airports
 * Request Body -> {name:"Indira Gandhi",code :"DEL", cityId:1,address:"Address "}
 */

async function createAirport(req, res, next) {

    try {
        const response = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            cityId: req.body.cityId,
            address: req.body.address
        });

        successResponse.data = response;
        successResponse.statusCode = StatusCodes.CREATED;
        successResponse.message = "Created Airport successfully";

        return res
            .status(successResponse.statusCode)
            .json(successResponse);

    } catch (error) {
        next(error);
    }
}


/**
 * Get Request : /api/v1/airports
 * Request Body -> {}
 */

async function getAirports(req, res, next) {
    try {
        const response = await AirportService.getAirports();

        successResponse.data = response;
        successResponse.statusCode = StatusCodes.OK;
        successResponse.message = "Airports fetched successfully";

        return res
            .status(successResponse.statusCode)
            .json(successResponse);

    } catch (error) {
        next(error);
    }
}


/**
 * Get Request : /api/v1/airport/:id
 * Request Body -> {}
 */

async function getAirport(req, res, next) {
    try {
        const response = await AirportService.getAirport(req.params.id);

        successResponse.data = response;
        successResponse.statusCode = StatusCodes.OK;
        successResponse.message = "Airport fetched successfully";

        return res
            .status(successResponse.statusCode)
            .json(successResponse);

    } catch (error) {
        next(error);
    }
}

/**
 * DELETE Request : /api/v1/airports/:id
 * Request Body -> {}
 */
async function destroyAirport(req, res, next) {

    try {

        const airport = await AirportService.destroyAirport(req.params.id);

        successResponse.data = airport;
        successResponse.message = "Successfully deleted Airport";
        successResponse.statusCode = StatusCodes.OK;

        return res
            .status(successResponse.statusCode)
            .json(successResponse);
    }
    catch (error) {
        next(error);
    }
}

/**
 * PUT Request /api/v1/airports/:id
 * Request Body -> {name:"Indira Gandhi",code :"DEL", cityId:1,address:"Address "}, we can also leave these fileds
 */
async function updateAirport(req, res, next) {

    try {
        const airport = await AirportService.updateAirport(req.params.id, {
            name: req.body.name
        });

        successResponse.data = await AirportService.getAirport(req.params.id);
        successResponse.message = "Successfully updated the Airport";
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
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}
