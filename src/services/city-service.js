const { CityRepo } = require('../repository/index');

class CityService {
    constructor() {
        this.cityRepository = new CityRepo();
    }
    
    async createCity(data) {
        try {
           const city = await this.cityRepository.createCity(data);
           return city;
        } catch (error) {
            console.log("Something went wrong at the service layer");
            
        }
    }

    async deletCity(cityId) {
        try {
           const response = await this.cityRepository.deletCity(cityId);
           return response;
        } catch (error) {
            console.log("Something went wrong at the service layer");
            
        }
    }

    async updateCity(cityId, data) {
         try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong at the service layer");
            
        }
    }

    async getCity(cityId) {
         try {
           const city = await this.cityRepository.getCity(cityId);
           return city;
        } catch (error) {
            console.log("Something went wrong at the service layer");
            
        }
    }
}

module.exports = CityService;