const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driver.controller');
const { body } = require('express-validator');
const authMiddleware = require('../middleware/auth.middleware');

// Route to register a new driver
router.post('/register', [
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.size').isIn(['small', 'medium', 'large']).withMessage('Invalid vehicle size'),
    body('vehicle.colour').notEmpty().withMessage('Vehicle colour is required'),
    body('vehicle.plate').notEmpty().withMessage('Vehicle plate is required'),
    body('vehicle.capacity').isNumeric().withMessage('Vehicle capacity must be a number')
], driverController.registerDriver);

// Route to login a driver
router.post('/login', [
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], driverController.loginDriver);

// Route to get driver profile
router.get('/profile', authMiddleware.authenticateDriver, driverController.getDriverProfile);

// Route to logout a driver
router.get('/logout', authMiddleware.authenticateDriver, driverController.logoutDriver);

module.exports = router;