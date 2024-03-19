const { StatusCodes } = require('http-status-codes');

const home = (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        message: "Home rendered successfully",
        error: [],
        data: []
    });
};

module.exports = home;