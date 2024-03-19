const { StatusCodes } = require('http-status-codes');

const homeNew = (req, res) => {
    return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Home V2 is missing",
        error: [],
        data: []
    });
};

module.exports = homeNew;