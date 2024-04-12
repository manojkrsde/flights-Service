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



        const trans = await sequelize.transaction();

        try {
            await sequelize.query(addRowlockOnFlights(flightId));
            const flight = await Flight.findByPk(flightId);
            if (parseInt(decrease)) {
                await flight.decrement('totalSeats', { by: seats }, { transaction: trans });
            } else {
                await flight.increment('totalSeats', { by: seats }, { transaction: trans });
            }

            //get the updated response
            await trans.commit();
            return flight.reload();

        } catch (error) {
            await trans.rollback();
            throw error;
        }


    }

}

module.exports = FlightRepository;