
const { FlightService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const successResponse = require('../utils/common/success.response');



/**
 * POST Request /api/v1/airplanes
 * Request Body -> {modelNumber:"airbus a330", capacity:180}
 */
async function createFlight(req, res, next) {

    try {
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats
        });

        successResponse.data = flight;
        successResponse.message = "Successfully created Flight object";
        successResponse.statusCode = StatusCodes.CREATED;

        return res
            .status(successResponse.statusCode)
            .json(successResponse);
    }
    catch (error) {
        next(error);
    }

}

module.exports = {
    createFlight
}