const { StatusCodes } = require('http-status-codes');
const { AppError } = require("../errors");
const { compareTime } = require('../utils/helpers/compareDateTime');

function validateCreateRequest(req, res, next) {
    const data = req.body;

    if (
        !data.flightNumber || !data.airplaneId || !data.departureAirportId ||
        !data.arrivalAirportId || !data.arrivalTime || !data.departureTime ||
        !data.price
    ) {
        let details = new Array();

        if (!data.flightNumber) details.push("flightNumber is not found in incomming request in correct form");

        if (!data.airplaneId) details.push("airplaneId is not found in incomming request in correct form");

        if (!data.departureAirportId) details.push("departureAirportId is not found in incomming request in correct form");

        if (!data.arrivalAirportId) details.push("arrivalAirportId is not found in incomming request in correct form");

        if (!data.arrivalTime) details.push("arrivalTime is not found in incomming request in correct form");

        if (!data.departureTime) details.push("departureTime is not found in incomming request in correct form");

        if (!data.price) details.push("price is not found in incomming request in correct form");

        throw new AppError(StatusCodes.BAD_REQUEST, "Please enter valid details", details);
    }

    if (compareTime(data.departureTime, data.arrivalTime)) {
        throw new AppError(StatusCodes.BAD_REQUEST, 'Please Enter Valid details', ['Departure Time can not be greater than arrival Time']);
    }

    next();
}


module.exports = {
    validateCreateRequest
};