
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

module.exports = {
    createFlight,
    getAllFlights
}