const app = require('../app');
const request = require('supertest');
const { mockFuelQuoteHistory, mockFuelQuote } = require('../mock/mockFuelData');



// describe('Fuel Quote Controller', () => {
//     afterEach(() => {
//       jest.clearAllMocks(); // Clear mock calls after each test
//     });
  
//     test('Create new fuel quote', async () => {
//       const response = await request(app)
//         .post('/createFuelQuote')
//         .send(mockFuelQuote);
  
//       expect(response.statusCode).toBe(200);
//       expect(response.body.message).toBe('Fuel quote submitted successfully');
//       expect(response.body.quote).toEqual(expect.objectContaining(mockFuelQuote));
//       // Ensure addQuote method is called with correct parameters
//       expect(require('../models/fuelQuote').addQuote).toHaveBeenCalledWith(mockFuelQuote);
//     });
  
//     test('Retrieve fuel quote history', async () => {
//       const response = await request(app)
//         .get('/fuelQuoteHistory');
  
//       expect(response.statusCode).toBe(200);
//       expect(response.body.quoteHistory).toEqual(mockFuelQuoteHistory);
//       // Ensure getQuoteHistory method is called
//       expect(require('../models/fuelQuote').getQuoteHistory).toHaveBeenCalled();
//     });
// });

describe('Fuel Quote', () => {
  it('should create a new quote', async () => {
      const res = await request(app)
          .post('/quote/create')
          .send(mockFuelQuote);
      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty('quote');
  });

  it('should get quote history', async () => {
      const res = await request(app)
          .get('/quote/history');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('quoteHistory', mockFuelQuoteHistory);
  });
});