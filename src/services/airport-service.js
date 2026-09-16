const CrudService = require('./crud-service');
const { AirportRepo } = require('../repository/index');

class AirportService extends CrudService {
    constructor() {
        const airportRepo = new AirportRepo();
        super(airportRepo);
    }
}

module.exports = AirportService;