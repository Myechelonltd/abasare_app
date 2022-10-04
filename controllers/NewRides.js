import { success, fail, sendError, } from '../function/respond'
import NewRide from '../models/NewRides'

const createRides = async (req, res) => {

    try {
        const {
            customerId,
            customerName,
            when,
            bookingTime,
            latitude,
            longitude,
            pickupAddress,
            pickupDatetime,
            dropAddress,
            dropDatetime,
            totalKmJourney,
            fareApplied,
            excessKm,
            standardFarePerKm,
            baseFare,
            additonalFare,
            subTotalFare,
            totalDiscount,
            totalFare,
            paymentMode,
            bookingStatus,
        } = req.body

        const newDriver = new NewRide({
            customerId,
            customerName,
            when,
            bookingTime,
            pickupCoordinates: {
                latitude,
                longitude
            },
            pickupAddress,
            pickupDatetime,
            dropAddress,
            dropCoordinates: {
                latitude,
                longitude
            },
            dropDatetime,
            totalKmJourney,
            fareApplied,
            excessKm,
            standardFarePerKm,
            baseFare,
            additonalFare,
            subTotalFare,
            totalDiscount,
            totalFare,
            paymentMode,
            bookingStatus,

        });
        // const findNewRide = await NewRide.findOne({ customerName: customerName });
        // if (findNewRide) return sendError(res, 409, `Customer Name exist`, null);
        const newRideSaved = await newDriver.save();
        return success(res, 201, "Request added successfully", newRideSaved)
    } catch (error) {
        return sendError(res, 500, error.message, null)
    }
}

const getRides = async (req, res) => {
    try {
        const newRides = await NewRide.find();
        return res.status(200).json({
            statuscode: "200",
            body:{
                count: "1374",
                next: "https://api.example.org/accounts/?limit=100&offset=500",
                previous: "https://api.example.org/accounts/?limit=100&offset=500",
                result: newRides
            },
            message: "Pending Local Ride List Fetched Successfully"
        })
    } catch (error) {
        return sendError(res, 500, error.message, null)
    }
}

const getRide = async (req, res) => {
    try {
        const ride = await NewRide.findById(req.params.id)
        if (!ride) return fail(res, 400, "Ride doesn't exist", null)
        return success(res, 200, "Data fetched.", ride)

    } catch (error) {
        return sendError(res, 500, error.message, null)
    }
}

const deletedRides = async (req, res) => {
    try {
        const newRide = await NewRide.findByIdAndDelete(req.params.id)
        if (!newRide) return fail(res, 400, "Ride doesn't exist", null)
        return success(res, 200, "Ride deleted successful", null)
    } catch (error) {
        return sendError(res, 500, error.message, null)
    }
}

const updatedRide = async (req, res) => {
    try {
        var id = req.params.id;
        const updatedRide = await NewRide.findByIdAndUpdate({ _id: id }, req.body, {
            new: true,
        })
        if (updatedRide) {
            return success(res, 201, "Ride updated successful", updatedRide)
        }
        else {
            return fail(res, 404, `We don't have Ride with this id ${id}`, null)
        }
    } catch (error) {
        res.status(200).json({ status: 'fail', message: error });
    }
}

export {
    createRides,
    getRides,
    getRide,
    deletedRides,
    updatedRide
};