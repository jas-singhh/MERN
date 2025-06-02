const driverModel = require('../models/driver.model');
const driverService = require('../services/driver.service');
const { validationResult } = require('express-validator');

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