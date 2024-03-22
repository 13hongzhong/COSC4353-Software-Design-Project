const fuelQuote = require('../models/fuelQuote')

//handles fuel quote creation
exports.createQuote = (req, res) => {
    // Validate request body
    // const { fullName, email, address, gallonsRequested, deliveryDate } = req.body;
    // if (!fullName || !email || !address || !gallonsRequested || !deliveryDate) {
    //     return res.status(400).json({ message: 'All fields are required.' });
    // }

    // Perform additional validations as needed

    // Create new fuel quote instance
    const newQuote = new fuelQuote(fullName, email, address, gallonsRequested, deliveryDate);

    // Save quote to database (to be implemented later)

    response.statusCode(201).json({ message: 'Quote created successfully.', quote: newQuote });
};

//handles fuel quote history
exports.getQuoteHistory = (req, res) => {
    // Fetch quote history from DB

    // Hardcoded quote history for testing
    const quoteHistory = {gallonsRequested: 500, deliveryAddress: 'Hoth', deliveryDate: '03/24/2024', suggestedPrice: 2000, totalAmountDue: 2500 };

    response.statusCode(200).json({ quoteHistory });
};