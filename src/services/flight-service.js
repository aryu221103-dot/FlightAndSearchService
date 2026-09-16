const {FlightRepo, AirplaneRepo} = require('../repository/index')
const {compareTime} = require('../utils/helper')

class FlightService {

    constructor() {
        this.airplaneRepo = new AirplaneRepo();
        this.flightRepo = new FlightRepo()
    }
    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw{error:"Arrival time can not be less than departure time"}
            }
            const airplane = await this.airplaneRepo.getAirplane(data.airplaneId);
            const flight = await this.flightRepo.createFlight({
                ...data, totalSeats:airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong at the service layer");
            throw{error};
        }
    }

    async getFlightData() {
        //todo
    }
}

module.exports = FlightService;

/**
 * {
 * flightNumber,
 * airplaneId,
 * depatureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * departureTime,
 * price,
 * totalSeats -- airplane
 * 
 * }
 */