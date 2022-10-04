const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    telephone: { type: Number }
},
    { timestamps: true });

module.exports = mongoose.model("User", UserSchema)