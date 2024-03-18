// Mock data for fuel quote history
const mockFuelQuoteHistory = [
    { gallonsRequested: 500, deliveryAddress: 'Hoth', deliveryDate: '2024-03-24', suggestedPrice: 2000, totalAmountDue: 2500 }
    // Add more mock data as needed
];

// Mock data for a single fuel quote
const mockFuelQuote = {
    fullName: 'Biggus Dickus',
    email: 'mf@gmail.com',
    address: 'Tattoine',
    gallonsRequested: 200,
    deliveryDate: '2024-03-21',
};

module.exports = {
    mockFuelQuoteHistory,
    mockFuelQuote,
};
