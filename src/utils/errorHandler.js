
const BaseError = require("../errors/base.error");
const { StatusCodes } = require('http-status-codes');

const errorResponse = require('./common/error.response');

function errorHandler(err, req, res, next) {

    if (err instanceof BaseError) {

        errorResponse.error = err;
        errorResponse.statusCode = err.statusCode;
        errorResponse.message = err.message;
        errorResponse.error = err.details;

        return res
            .status(err.statusCode)
            .json(errorResponse);
    }

    errorResponse.error = err;
    return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(errorResponse);
}

module.exports = errorHandler;