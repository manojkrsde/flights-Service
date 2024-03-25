const { StatusCodes } = require('http-status-codes');

const success = {
    success: true,
    statusCode: StatusCodes.OK,//default
    message: "",
    data: {},
    error: {}
};

module.exports = success;