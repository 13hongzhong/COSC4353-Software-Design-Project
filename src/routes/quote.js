const express = require('express');
const router = express.Router();
const fuelQuoteController = require('../controllers/quoteController');

router.post('/quote/create', fuelQuoteController.createQuote);
router.get('/quote/history', fuelQuoteController.getQuoteHistory);

module.exports = router;

// // endpoint to get quote history
// router.get('/fuelQuoteHistory', (req, res) => {
//     try {
//         const quoteHistory = fuelQuote.getQuoteHistory();
//         return res.status(200).json({ quoteHistory });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// });


// // endpoint to create new quote
// router.post('/createFuelQuote', (req, res) => {
//     try {
//         const { gallonsRequested, deliveryDate } = req.body;

//         // Validate input
//         if (!gallonsRequested || isNaN(gallonsRequested) || !deliveryDate) {
//             return res.status(400).json({ message: 'Invalid input' });
//         }

//         // Calculate suggested price for when we've done the pricing module
//         const suggestedPrice = 720;
//         const totalAmountDue = suggestedPrice * gallonsRequested;

//         // Save fuel quote
//         const quote = {
//             gallonsRequested,
//             deliveryDate,
//             suggestedPrice,
//             totalAmountDue
//         };
//         fuelQuote.createQuote(quote);

//         return res.status(200).json({ message: 'Fuel quote submitted successfully', quote });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// });

module.exports = router;