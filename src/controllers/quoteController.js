const { validationResult }  = require('express-validator');

//handles fuel quote requests
exports.getFuelQuoteHistory = (req, res) => {
    //logic to fetch quote history from DB
    
    //send response
    res.json({ history: [] });
};

exports.createFuelQuote = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //logic to create fuel quote in DB
    
    res.json({ message: 'Fuel quote created successfully' });
};