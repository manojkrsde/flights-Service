
const { StatusCodes } = require("http-status-codes");
const { AirportService } = require("../services");
const { SuccessResponse } = require('../utils/common/');

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

        SuccessResponse.data = response;
        SuccessResponse.statusCode = StatusCodes.CREATED;
        SuccessResponse.message = "Created Airport successfully";

        return res
            .status(SuccessResponse.statusCode)
            .json(SuccessResponse);

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

        SuccessResponse.data = response;
        SuccessResponse.statusCode = StatusCodes.OK;
        SuccessResponse.message = "Airports fetched successfully";

        return res
            .status(SuccessResponse.statusCode)
            .json(SuccessResponse);

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

        SuccessResponse.data = response;
        SuccessResponse.statusCode = StatusCodes.OK;
        SuccessResponse.message = "Airport fetched successfully";

        return res
            .status(SuccessResponse.statusCode)
            .json(SuccessResponse);

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

        SuccessResponse.data = airport;
        SuccessResponse.message = "Successfully deleted Airport";
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
 * PUT Request /api/v1/airports/:id
 * Request Body -> {name:"Indira Gandhi",code :"DEL", cityId:1,address:"Address "}, we can also leave these fileds
 */
async function updateAirport(req, res, next) {

    try {
        const response = await AirportService.updateAirport(req.params.id, {
            name: req.body.name,
            code: req.body.code,
            cityId: req.body.cityId,
            address: req.body.address
        });

        SuccessResponse.data = await AirportService.getAirport(req.params.id);
        SuccessResponse.message = "Successfully updated the Airport";
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
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}
