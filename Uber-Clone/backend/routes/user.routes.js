/**
 * User Routes
 * This module defines routes for user registration and login.
 */

const express = require('express');
const userController = require('../controllers/user.controller');
const {body} = require("express-validator");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.post('/register', [
    body("email").isEmail().withMessage("Please provide a valid email address"),
    body("fullname.firstname").isLength({min: 3}).withMessage("First name must be at least 3 characters long"),
    body("fullname.lastname").isLength({min: 3}).withMessage("Last name must be at least 3 characters long"),
    body("password").isLength({min: 6}).withMessage("Password must be at least 6 characters long")
], userController.registerUser);

// Route to login a user
router.post('/login', [
    body("email").isEmail().withMessage("Please provide a valid email address"),
    body("password").isLength({min: 6}).withMessage("Password must be at least 6 characters long")
], userController.loginUser);

router.get("/profile", authMiddleware.authenticateUser, userController.getUserProfile);

module.exports = router;