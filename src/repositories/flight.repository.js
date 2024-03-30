const CurdRepository = require('./crud.repository');
const { Flight, sequelize } = require('../models');



class FlightRepository extends CurdRepository {

    constructor() {
        super(Flight);
    }

    async getAllFlights(customQuery) {
        const response = await sequelize.query(customQuery);
        return response[0];
    }

}

module.exports = FlightRepository;