const CurdRepository = require('./crud.repository');
const { Flight, sequelize } = require('../models');
const { addRowlockOnFlights } = require('./queries');



class FlightRepository extends CurdRepository {

    constructor() {
        super(Flight);
    }

    async getAllFlights(filter) {
        const response = await Flight.findAll(filter);
        return response;
    }

    async getFlight(id) {
        const response = await Flight.findByPk(id);
        return response;
    }

    async updateReaminigSeats(flightId, seats, decrease = 1) {

        await sequelize.query(addRowlockOnFlights(flightId));

        const flight = await Flight.findByPk(flightId);

        if (parseInt(decrease)) {
            await flight.decrement('totalSeats', { by: seats });
        } else {
            await flight.increment('totalSeats', { by: seats });
        }

        //get the updated response
        return flight.reload();

    }

}

module.exports = FlightRepository;