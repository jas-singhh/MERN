const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const blacklistedTokenModel = require("../models/blacklisted-token.model");

module.exports.authenticateUser = async (req, res, next) => {
        // Get the token
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Unauthorised" });
        }     
        
        // Check if the token is blacklisted
        const isBlacklisted = await blacklistedTokenModel.exists({ token });
        if (isBlacklisted) {
            return res.status(401).json({ message: "Token is blacklisted, please login again" });
        }

        try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: "Invalid token" });
        }

        // Attach user information to the request object
        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }        

        req.user = user;
        next(); // Call the next middleware or route handler

        } catch (error) {
            console.error("Error in authentication middleware:", error);
            return res.status(500).json({ message: "Internal server error" });
            
        }
        

}