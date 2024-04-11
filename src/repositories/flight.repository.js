const CurdRepository = require('./crud.repository');
const { Flight, sequelize } = require('../models');
const { where } = require('sequelize');



class FlightRepository extends CurdRepository {

    constructor() {
        super(Flight);
    }

    async getAllFlights(filter) {
        const response = await Flight.findAll(filter);
        return response;
    }

    async getFlight(id, filter) {
        filter.where['id'] = id;
        const response = await Flight.findAll(filter);
        return response;
    }

}

module.exports = FlightRepository;