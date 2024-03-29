const CrudRepository = require('./crud.repository');

const { Airport, sequelize } = require('../models');

class AirportRepository extends CrudRepository {

    constructor() {
        super(Airport);
    }
}

module.exports = AirportRepository;