const { StatusCodes } = require('http-status-codes');
const { AppError } = require("../errors");

function validateCreateRequest(req, res, next) {


    if (!req.body.name || !req.body.code || !req.body.address || !req.body.cityId) {

        let details = new Array();

        if (!req.body.name) {
            details.push("Name is not found in incomming request in correct form")
        }

        if (!req.body.code) {
            details.push("Code is not found in incomming request in correct form")
        }

        if (!req.body.address) {
            details.push("Address is not found in incomming request in correct form")
        }

        if (!req.body.cityId) {
            details.push("cityId is not found in incomming request in correct form")
        }

        throw new AppError(StatusCodes.BAD_REQUEST, "Please enter valid details", details);
    }

    next();
}

module.exports = {
    validateCreateRequest
};