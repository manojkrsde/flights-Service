const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config');

const { AirplaneService } = require('../services');

/**
 * POST Request
 * Request Body -> {modelNumber:"airbus a330", capacity:180}
 */

async function createAirplane(req, res) {

    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });

        return res
            .status(StatusCodes.CREATED)
            .json({
                success: true,
                message: "Successfully created airplane",
                data: airplane,
                error: {}
            });
    }
    catch (error) {
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                success: false,
                message: "Something went wrong while creating airplane",
                data: {},
                error: error
            });
    }
}

module.exports = createAirplane;