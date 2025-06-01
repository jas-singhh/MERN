const mongoose = require('mongoose');

// Define the schema for blacklisted tokens
const blacklistedTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true, // Ensure that each token is unique
    },

    createdAt: {
        type: Date,
        default: Date.now, // Automatically set the creation date to now
        expires: "86400"// 1 day in seconds, e.g., "1d" or 86400 seconds
    }

});

module.exports = mongoose.model('BlacklistedToken', blacklistedTokenSchema);