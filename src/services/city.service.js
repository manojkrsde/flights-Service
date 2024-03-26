
const { AppError, InternalServerError } = require('../errors/');
const { CityRepository } = require("../repositories");
const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config');

let cityRepository = new CityRepository();

async function createCity(data) {

    try {
        const city = await cityRepository.create(data);
        return city;

    } catch (error) {

        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {

            let explanation = [];

            error.errors.forEach((err) => {
                explanation.push(`${err.value} is already present, name must be unique`);
            });

            Logger.error({ message: "Something went wrong doing validation", error: error });

            throw new AppError(StatusCodes.BAD_REQUEST, "Something went wrong doing validation", explanation);

        }

        throw new InternalServerError("Cannot create a new city Object");
    }
}

async function getCities() {

    try {
        const cities = await cityRepository.getAll();
        return cities;

    } catch (error) {
        throw new InternalServerError("Cannot fetch cities");
    }
}

async function getCity(id) {

    try {

        const city = await cityRepository.get(id);
        return city;

    } catch (error) {

        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError(error.statusCode, "Cannot fetched the city", ["Resource requested is not present"]);
        }

        throw new InternalServerError("Cannot get the city");
    }
}


async function destroyCity(id) {

    try {

        const city = await cityRepository.destroy(id);
        return city;

    } catch (error) {

        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError(error.statusCode, "Cannot delete the city", ["Resource requested to delete is not present"]);
        }

        throw new InternalServerError("Cannot delete the city");
    }
}

async function updateCity(key, data) {

    try {

        const city = await cityRepository.update(key, data);
        return city;

    } catch (error) {

        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError(error.statusCode, "Cannot update the city", ["Resource requested to update is not present"]);
        }

        throw new InternalServerError("Cannot update the city");
    }
}


module.exports = {
    createCity,
    getCities,
    getCity,
    destroyCity,
    updateCity
}