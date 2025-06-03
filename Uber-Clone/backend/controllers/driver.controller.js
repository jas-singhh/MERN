const driverModel = require('../models/driver.model');
const driverService = require('../services/driver.service');
const { validationResult } = require('express-validator');
const blacklistedTokenModel = require('../models/blacklisted-token.model');

// Register a new driver
module.exports.registerDriver = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password, vehicle } = req.body;

        const doesDriverExist = await driverModel.exists({ email });
        if (doesDriverExist) {
            return res.status(400).json({ message: "Driver with this email already exists" });
        }

        const hashedPassword = await driverModel.hashPassword(password);

        const driver = await driverService.createDriver({
            fullname: {
                firstname: fullname.firstname,
                lastname: fullname.lastname
            },
            email,
            password: hashedPassword,
            vehicle
        });

        // Generate token
        const token = driver.generateAuthToken();
        // 201 - Created
       return res.status(201).json({ token, driver });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

// Login a driver
module.exports.loginDriver = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {email, password} = req.body;

        // Check if driver exists
        const driver = await driverModel.findOne({email}).select('+password');
        if (!driver) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
    
        const isMatch = await driver.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate token
        const token = driver.generateAuthToken();
        return res.status(200).json({ token, driver });
    } catch (error) {
        console.error("Error logging in driver:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports.getDriverProfile = async (req, res, next) => {
    try {
        return res.status(200).json({ driver: req.driver });
        
    } catch (error) {
        console.error("Error fetching driver profile:", error);
        return res.status(500).json({ message: "Internal server error" });
    }

}

// Logout a driver
module.exports.logoutDriver = async (req, res, next) => {
    try {
        // Get token
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        // Blacklist the token
        blacklistedTokenModel.create({token});

        // Clear the cookie
        res.clearCookie("token");

        return res.status(200).json({ message: "Logged out successfully" });

    } catch (error) {
        console.error("Error logging out driver:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}