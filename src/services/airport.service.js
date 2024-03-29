const { AirportRepository } = require('../repositories');
const { AppError, InternalServerError } = require('../errors/');
const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config');



let airportRepository = new AirportRepository();

async function createAirport(data) {

    try {
        console.log(data);
        const airport = await airportRepository.create(data);
        return airport;
    } catch (error) {

        if (error.name == 'SequelizeValidationError') {

            let explanation = [];

            error.errors.forEach((err) => {
                explanation.push(err.message);
            });

            Logger.error({ message: "Something went wrong doing validation", error: error });

            throw new AppError(StatusCodes.BAD_REQUEST, "Something went wrong doing validation", explanation);
        }

        throw new InternalServerError("Cannot create a new Airport Object");
    }
}


async function getAirports() {

    try {

        const airports = await airportRepository.getAll();
        return airports;

    } catch (error) {
        throw new InternalServerError("Cannot get the airports");
    }
}

async function getAirport(id) {

    try {

        const airport = await airportRepository.get(id);
        return airport;

    } catch (error) {

        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError(error.statusCode, "Cannot fetched the airport", ["Resource requested is not present"]);
        }

        throw new InternalServerError("Cannot get the airport");
    }
}

async function destroyAirport(id) {

    try {

        const airport = await airportRepository.destroy(id);
        return airport;

    } catch (error) {

        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError(error.statusCode, "Cannot delete the airport", ["Resource requested to delete is not present"]);
        }

        throw new InternalServerError("Cannot delete the airport");
    }
}

async function updateAirport(key, data) {

    try {

        const airport = await airportRepository.update(key, data);
        return airport;

    } catch (error) {

        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError(error.statusCode, "Cannot update the airport", ["Resource requested to update is not present"]);
        }

        throw new InternalServerError("Cannot update the airport");
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
};