const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const driverSchema = new mongoose.Schema( {
    fullname: {
        firstname: {type: String, required: true, minLength: [3, "First name must be at least 3 characters long"]},
        lastname: {type: String, required: true, minLength: [3, "Last name must be at least 3 characters long"]}
    },
    email: {type: String, required: true, unique: true, lowercase: true, match: [/.+\@.+\..+/, "Please enter a valid email address"]},
    password: {type: String, required: true, select: false, minLength: [6, "Password must be at least 6 characters long"]},

    status: {type: String, enum: ["active", "inactive"], default: "inactive"},
    vehicle: {
        size: {type: String, enum: ['small', 'medium', 'large'], required: true},
        colour: {type: String, required: true},
        plate: {type: String, required: true, unique: true},
        capacity: {type: Number, required: true, min: [1, "Capacity must be at least 1"]},
    },

    location: {
        // Not required as if the driver is not active, they may not have a location
        latitude: { type: Number},
        longitude: { type: Number},
    },

    socketId: {type: String},
});

// Generate token for the driver
driverSchema.methods.generateAuthToken = function() {
    const token = jwt.sign(
        { id: this._id},
        process.env.JWT_SECRET
    );

    return token;
}

// Hash the password before saving the driver
driverSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

// Compare password with the hashed password in the database
driverSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('Driver', driverSchema)