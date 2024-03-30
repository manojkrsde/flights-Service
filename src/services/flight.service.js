const { AppError, InternalServerError } = require('../errors/');
const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config');

const { FlightRepository } = require('../repositories');

const flightRepository = new FlightRepository();

async function createFlight(data) {

    try {
        const response = await flightRepository.create(data);
        return response;
    } catch (error) {
        if (error.name == 'SequelizeValidationError') {

            let explanation = [];

            error.errors.forEach((err) => {
                explanation.push(err.message);
            });


            Logger.error({ message: "Something went wrong doing validation", error: error });

            throw new AppError(StatusCodes.BAD_REQUEST, "Something went wrong doing validation", explanation);
        }

        throw new InternalServerError("Cannot create a new Flight Object");

    }

}

module.exports = {
    createFlight
}