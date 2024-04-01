
const { StatusCodes } = require("http-status-codes");
const { CityService } = require("../services");
const { SuccessResponse } = require('../utils/common/');

async function createCity(req, res, next) {

    try {
        const response = await CityService.createCity({
            name: req.body.name
        });

        SuccessResponse.data = response;
        SuccessResponse.statusCode = StatusCodes.CREATED;
        SuccessResponse.message = "Created City successfully";

        return res
            .status(SuccessResponse.statusCode)
            .json(SuccessResponse);

    } catch (error) {
        next(error);
    }
}

async function getCities(req, res, next) {
    try {
        const response = await CityService.getCities();

        SuccessResponse.data = response;
        SuccessResponse.statusCode = StatusCodes.OK;
        SuccessResponse.message = "Cities fetched successfully";

        return res
            .status(SuccessResponse.statusCode)
            .json(SuccessResponse);

    } catch (error) {
        next(error);
    }
}

async function getCity(req, res, next) {
    try {
        const response = await CityService.getCity(req.params.id);

        SuccessResponse.data = response;
        SuccessResponse.statusCode = StatusCodes.OK;
        SuccessResponse.message = "City fetched successfully";

        return res
            .status(SuccessResponse.statusCode)
            .json(SuccessResponse);

    } catch (error) {
        next(error);
    }
}


async function destroyCity(req, res, next) {

    try {

        const city = await CityService.destroyCity(req.params.id);

        SuccessResponse.data = city;
        SuccessResponse.message = "Successfully deleted city";
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
async function updateCity(req, res, next) {

    try {
        const city = await CityService.updateCity(req.params.id, {
            name: req.body.name
        });

        SuccessResponse.data = await CityService.getCity(req.params.id);
        SuccessResponse.message = "Successfully updated the city";
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
    createCity,
    getCities,
    getCity,
    destroyCity,
    updateCity
}
