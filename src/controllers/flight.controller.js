
const { FlightService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse } = require('../utils/common/');


/**
 * POST Request /api/v1/flights
 * Request Body -> {
 * 
 * }
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
            boardingGate: req.body.boardingGate
        });

        SuccessResponse.data = flight;
        SuccessResponse.message = "Successfully created Flight object";
        SuccessResponse.statusCode = StatusCodes.CREATED;

        return res
            .status(SuccessResponse.statusCode)
            .json(SuccessResponse);
    }
    catch (error) {
        next(error);
    }

}



/**
 * Get Request : /api/v1/flights/?
 * Request Body -> {}
 */

async function getAllFlights(req, res, next) {
    try {
        const response = await FlightService.getAllFlights(req.query);

        SuccessResponse.data = response;
        SuccessResponse.statusCode = StatusCodes.OK;
        SuccessResponse.message = "Flights fetched successfully";

        return res
            .status(SuccessResponse.statusCode)
            .json(SuccessResponse);

    } catch (error) {
        next(error);
    }
}



/**
 * Get Request : /api/v1/flights/:id
 * Request Body -> {}
 */

async function getFlight(req, res, next) {
    try {
        const response = await FlightService.getFlight(req.params.id);

        SuccessResponse.data = response;
        SuccessResponse.statusCode = StatusCodes.OK;
        SuccessResponse.message = "Flight fetched successfully";

        return res
            .status(SuccessResponse.statusCode)
            .json(SuccessResponse);

    } catch (error) {
        next(error);
    }
}

/**
 * PATCH Request : /api/v1/flights/:id/seats
 * Request Body -> {seats:10,decrease:0}
 */

async function updateSeats(req, res, next) {
    try {
        const response = await FlightService.updateSeats({
            flightId: req.params.id,
            seats: req.body.seats,
            decrease: req.body.decrease
        });

        SuccessResponse.data = response;
        SuccessResponse.statusCode = StatusCodes.OK;
        SuccessResponse.message = "Flight updated successfully";

        return res
            .status(SuccessResponse.statusCode)
            .json(SuccessResponse);

    } catch (error) {
        next(error);
    }
}

module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    updateSeats
}