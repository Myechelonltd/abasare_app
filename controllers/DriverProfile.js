import { success, fail, sendError, } from '../function/respond'
import Driver from '../models/DriverProfile'


const getDrivers = async (req, res) => {
    try {
        const drivers = await Driver.find().sort("-createdAt");
        return success(res, 200, "retrieved all Drivers", drivers)
    } catch (error) {
        return sendError(res, 500, error.message, null)
    }
}

const getDriver = async (req, res) => {
    try {
        const driver = await Driver.findById(req.params.id)
        if (!driver) return fail(res, 400, "Driver doesn't exist", null)
        return success(res, 200, "retrieved Driver", driver)

    } catch (error) {
        return sendError(res, 500, error.message, null)
    }
}

const deletedDriver = async (req, res) => {
    try {
        const driver = await Driver.findByIdAndDelete(req.params.id)
        if (!driver) return fail(res, 400, "Driver doesn't exist", null)
        return success(res, 200, "Driver deleted successful", null)
    } catch (error) {
        return sendError(res, 500, error.message, null)
    }
}

const updatedDriver = async (req, res) => {
    try {
        var id = req.params.id;
        const updatedDriver = await Driver.findByIdAndUpdate({ _id: id }, req.body, {
            new: true,
        })
        if (updatedDriver) {
            return success(res, 201, "Driver updated successful", updatedDriver)
        }
        else {
            return fail(res, 404, `We don't have Driver with this id ${id}`, null)
        }
    } catch (error) {
        res.status(200).json({ status: 'fail', message: error });
    }
}

export {
    getDrivers,
    getDriver,
    deletedDriver,
    updatedDriver
};