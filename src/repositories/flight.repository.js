const CurdRepository = require('./crud.repository');
const { Flight, sequelize } = require('../models');



class FlightRepository extends CurdRepository {

    constructor() {
        super(Flight);
    }

    async getAllFlights(filter) {
        const response = await Flight.findAll(filter);
        return response;
    }

}

module.exports = FlightRepository;