const { validationResult, body } = require('express-validator');

// middleware to check if they are logged in
const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/login-Registration-page.html")
    }
}

// validation of fuel quote data
const fuelQuoteValidation = [
    body('fullName').notEmpty().withMessage('Client name is required'),
    body('email').notEmpty().withMessage('Client email is required').isEmail().withMessage('Email must be in the correct format'),
    body('address').notEmpty().withMessage('Client address is required'),
    body('gallonsRequested').isNumeric().withMessage('Gallons requested must be a number'),
    body('deliveryDate').notEmpty().withMessage('Delivery date is required').matches(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/).withMessage('Delivery date must be in MM/DD/YYYY format')
];

const validateFuelQuote = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

const validateLogin = [
    body('username').notEmpty().isLength(min=1, max=50),
    body('password').notEmpty().isLength(min=1, max=50),
]

const validateRegistration = [
    body('fullName').notEmpty().isLength(min=1, max=50),
    body('username').notEmpty().isLength(min=1, max=50),
    body('password').notEmpty().isLength(min=1, max=50),
]

const validateProfile = (req, res, next) => {
    payload = req.body
    if (!payload.fullName || (typeof payload.fullName !== "string") || payload.fullName.length > 50) {
        res.status(400);
    }
    if (!payload.address || (typeof payload.address !== "string") || payload.address.length > 100) {
        res.status(400);
    }
    if (payload.address2 && ((typeof payload.address !== "string") || payload.address.length > 100)) {
        res.status(400);
    }
    if (!payload.city || (typeof payload.city !== "string") || payload.city.length > 100) {
        res.status(400);
    }
    if (!payload.state || (typeof payload.state !== "string") || payload.state.length > 2) {
        res.status(400);
    }
    if (!payload.zipcode || (typeof payload.zipcode !== "string") || payload.zipcode.length > 9 || payload.zipcode.length < 5) {
        res.status(400);
    }
    next();
}

module.exports = {fuelQuoteValidation, validateFuelQuote, validateProfile, isLoggedIn, validateRegistration, validateLogin};