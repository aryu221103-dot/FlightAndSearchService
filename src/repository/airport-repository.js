const CrudRepo = require('./crud-repository')
const { Airport } = require('../models/index');

class AirportRepo extends CrudRepo {
    constructor() {
        super(Airport);
    }
}

module.exports = AirportRepo;