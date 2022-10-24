import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    name: String,
    phone_code: String,
    phone: String,
    nationality: String,
    address: String,
    doc_type: String,
    domestic_license: String,
    driving_permit: [
        {
            driving_permit_fontSide: String,
            driving_permit_backSide: String,
        }
    ],
    international_license: String,
    passport: String,
    aadhar_card: String,
    status: String,
    bookingId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }]
},
    { timestamps: true });

export default mongoose.model("Client", ClientSchema)