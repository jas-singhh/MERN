const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const {validationResult} = require('express-validator');

/**
 * Register a new user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
module.exports.registerUser = async (req, res, next) => {
    try {
        // Check for errors in the request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }        

        const {fullname, email, password} = req.body;
        const hashedPassword = await userModel.hashPassword(password);

        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword
        });
        // Generate token
        const token = user.generateAuthToken();

        // 201 - Created
        res.status(201).json({ token });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

/**
 * Login a user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
module.exports.loginUser = async (req, res, next) => {
    try {
        // Check for errors in the request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {email, password} = req.body;      
        
        console.log("email:", email);
        

        // Find user by email
        // Note: The password field is selected explicitly to allow password comparison
        const user = await userModel.findOne({email}).select('+password');// + select includes the password field in the result
       if (!user) {
            return res.status(401).json({message: "Invalid email"});
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({message: "Invalid password"});
        }
            
        // Generate token
        const token = user.generateAuthToken();

        // 200 - OK
        return res.status(200).json({ token, user });

    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

/**
 * Get user profile
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
module.exports.getUserProfile = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ user });
    } catch (error) {
        console.error("Error getting user profile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}