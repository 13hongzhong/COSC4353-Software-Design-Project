const { validationResult, body } = require('express-validation');

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

const validateProfile = (req, res, next) => {

}

module.exports = {fuelQuoteValidation, validateFuelQuote, validateProfile};