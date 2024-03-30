const CurdRepository = require('./crud.repository');
const { Flight } = require('../models');


class FlightRepository extends CurdRepository {

    constructor() {
        super(Flight);
    }

}

module.exports = FlightRepository;