const { AirplaneRepository } = require('../repositories');
const { AppError, InternalServerError } = require('../errors/');
const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config');



let airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {

    try {

        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {

        if (error.name == 'SequelizeValidationError') {

            let explanation = [];

            error.errors.forEach((err) => {
                explanation.push(err.message);
            });

            Logger.error({ message: "Something went wrong doing validation", error: error });

            throw new AppError(StatusCodes.BAD_REQUEST, "Something went wrong doing validation", explanation);

        }

        throw new InternalServerError("Cannot create a new Airplane Object");

    }
}

module.exports = {
    createAirplane
};