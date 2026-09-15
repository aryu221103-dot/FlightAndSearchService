const { City } = require('../models/index');
 
class CityRepo {
    async createCity({name}) {
      try  {const city = await City.create({name});
        return city;
    } catch (error) {
        throw {error};
    }
    }

    async deletCity(cityId) {
      try { await City.destroy({
            where: {id:cityId}
        });
        return true;
    } catch (error) {
        console.log("Something went wrong!");
            throw {error}
    }
}
    async updateCity(cityId, data) { //{name: "prayagraj"}
        try {
            // will not return updated object
            // const city = await City.update(data, {
            //     where: { id: cityId },
            //     returning: true,
            //     plain: true
            // });
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
            // will return updated object
        } catch (error) {
            throw { error };
        }
    }

    async getCity(cityId) {
      try {
        const city = await City.findByPk(cityId);
        return city;
      } catch (error) {
        throw { error };
      }
    }
}

module.exports = CityRepo;