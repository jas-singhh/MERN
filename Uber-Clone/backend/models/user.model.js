const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Define the user schema
const userSchema = new mongoose.Schema({
    fullname: {
        firstname: { type: String, required: true, minlength:[3, 'First name must be at least 3 characters long'] },
        lastname: { type: String, minlength:[3, 'Last name must be at least 3 characters long'] },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        select: false, // Exclude password from queries by default
        minlength: [6, 'Password must be at least 6 characters long']
    },

    // Used to track driver location
    socketId: {
        type: String,
    }
});

// Generate JWT token for the user to authenticate requests
userSchema.methods.generateAuthToken = function() {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
        throw new Error("JWT secret is not defined");
    }
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
    return token;
}

// Compare the provided password with the hashed password stored in the database
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
}

// Hash the password before saving the user
userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;