const { CityService, CityService } = require('../services/index');

const cityService = new CityService();
/**
 * POST
 * data - req.body
 */
const create = async (req, res) => {
    try {
        const city = await cityService.createCity({name: body.name})
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a city",
            err: error
        })
    }
}

/**
 * DELETE
 * data - /city/:id
 */

const delet = async (req, res) => {
    try {
        const response = await cityService.deletCity(req.params.id)
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted a city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete the city",
            err: error
        })
    }
}

/**
 * GET
 * data - /city/:id
 */
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id)
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to read the data of the city",
            err: error
        })
    }
}

/**
 * PATCH
 * data - /city/:id
 */
const update = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id, req.body)
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully updated",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the city",
            err: error
        })
    }
}

module.exports = {
    create,
    delet,
    get,
    update
}