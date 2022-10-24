import { success, fail, sendError, } from '../function/respond'
import BookingHistory from '../models/BookingHistory'

const createBooking = async (req, res) => {

    try {
        const {
            booking_id,
            is_reported,
            is_rated,
            order_id,
            pickup_date,
            return_date,
            billing_type,
            ride_status,
            total_amount,
            payment_status,
            vehicle_id,
            model_id,
            type_id,
            photo,
            vehicle_name,
            limited_price,
            unlimited_price,
            seater,
            fuel_type,
            transmission,
            year,
            air_bags,
            is_limited,
            is_unlimited,
            cancelled_by,
            cancellation_reason
        } = req.body

        const newClient = new BookingHistory({
            booking_id,
            is_reported,
            is_rated,
            order_id,
            pickup_date,
            return_date,
            billing_type,
            ride_status,
            total_amount,
            payment_status,
            vehicle_details: {
                vehicle_id,
                model_id,
                type_id,
                photo,
                vehicle_name,
                limited_price,
                unlimited_price,
                seater,
                fuel_type,
                transmission,
                year,
                air_bags,
                is_limited,
                is_unlimited,
            },
            cancelled_by,
            cancellation_reason,
        });
        const clientSaved = await newClient.save();
        return success(res, 201, "Your Booking created successfully", clientSaved)
    } catch (error) {
        return sendError(res, 500, error.message, null)
    }
}

const getBookings = async (req, res) => {
    try {
        const bookings = await BookingHistory.find();
        return success(res, 200, "Data fetched!", bookings)
    } catch (error) {
        return sendError(res, 500, error.message, null)
    }
}

const getBooking = async (req, res) => {
    try {
        const user = await BookingHistory.findById(req.params.id)
        if (!user) return fail(res, 400, "Booking doesn't exist", null)
        return success(res, 200, "Data fetched!", user)

    } catch (error) {
        return sendError(res, 500, error.message, null)
    }
}

const cancelBooking = async (req, res) => {
    try {
        const booking = await BookingHistory.findByIdAndDelete(req.params.id)
        if (!booking) return fail(res, 400, "Booking doesn't exist", null)
        return success(res, 200, "Booking canceled successful", null)
    } catch (error) {
        return sendError(res, 500, error.message, null)
    }
}

export {
    createBooking,
    getBookings,
    getBooking,
    cancelBooking
};