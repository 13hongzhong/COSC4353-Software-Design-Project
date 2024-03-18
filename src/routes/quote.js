const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const fuelQuoteController = require('../controllers/quoteController');

// get quote history
router.get('/history', fuelQuoteController.getFuelQuoteHistory);

// create new quote
router.post('/create', [
    check('email').notEmpty(),
    check('gallonsRequested').isNumeric(),
], fuelQuoteController.createFuelQuote);

module.exports = router;