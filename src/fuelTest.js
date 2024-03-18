const request = require('supertest');
const app = require('../index');
const { mockFuelQuoteHistory, mockFuelQuote } = require('./mockFuelData');

describe('Fuel Quote Controller', () => {
    it('GET /api/fuel-quotes/history - should return fuel quote history', async () => {
        const response = await request(app)
            .get('/api/fuel-quotes/history')
            .expect(200);

        expect(response.body).toEqual({ history: mockFuelQuoteHistory });
    });

    it('POST /api/fuel-quotes/create - should create a new fuel quote', async () => {
        const response = await request(app)
            .post('/api/fuel-quotes/create')
            .send(mockFuelQuote)
            .expect(200);

        expect(response.body).toEqual({ message: 'Fuel quote created successfully' });
    });

    it('POST /api/fuel-quotes/create - should return 400 if invalid input', async () => {
        const response = await request(app)
            .post('/api/fuel-quotes/create')
            .send({}); // Invalid input
        expect(response.status).toBe(400);
    });
});
