const CrudRepository = require('./crud.repository');

const { Airplane, sequelize } = require('../models');

class AirplaneRepository extends CrudRepository {

    constructor() {
        super(Airplane);
    }
}

module.exports = AirplaneRepository;