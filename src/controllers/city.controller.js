
const { StatusCodes } = require("http-status-codes");
const { CityService } = require("../services");
const successResponse = require("../utils/common/success.response");

async function createCity(req, res, next) {

    try {
        const response = await CityService.createCity({
            name: req.body.name
        });

        successResponse.data = response;
        successResponse.statusCode = StatusCodes.CREATED;
        successResponse.message = "Created City successfully";

        return res
            .status(successResponse.statusCode)
            .json(successResponse);

    } catch (error) {
        next(error);
    }
}

async function getCities(req, res, next) {
    try {
        const response = await CityService.getCities();

        successResponse.data = response;
        successResponse.statusCode = StatusCodes.OK;
        successResponse.message = "Cities fetched successfully";

        return res
            .status(successResponse.statusCode)
            .json(successResponse);

    } catch (error) {
        next(error);
    }
}

async function getCity(req, res, next) {
    try {
        const response = await CityService.getCity(req.params.id);

        successResponse.data = response;
        successResponse.statusCode = StatusCodes.OK;
        successResponse.message = "City fetched successfully";

        return res
            .status(successResponse.statusCode)
            .json(successResponse);

    } catch (error) {
        next(error);
    }
}


async function destroyCity(req, res, next) {

    try {

        const city = await CityService.destroyCity(req.params.id);

        successResponse.data = city;
        successResponse.message = "Successfully deleted city";
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
 * PUT Request /api/v1/airplanes/:id
 * Request Body -> {modelNumber:"New value", capacity:"New value"}, we can also leave these fileds
 */
async function updateCity(req, res, next) {

    try {
        const city = await CityService.updateCity(req.params.id, {
            name: req.body.name
        });

        successResponse.data = await CityService.getCity(req.params.id);
        successResponse.message = "Successfully updated the city";
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
    createCity,
    getCities,
    getCity,
    destroyCity,
    updateCity
}
