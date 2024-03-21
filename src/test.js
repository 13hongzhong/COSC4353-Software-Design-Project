const request = require('supertest');
const session = require('supertest-session')
const app = require('./app');
const { mockFuelQuoteHistory, mockFuelQuote } = require('./mock/mockFuelData');
const { mockProfile, mockProfileBadAddress, mockProfileBadName } = require('./mock/mockProfileData');

var testSession = session(app)

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

describe('Profile Controller', () => {

    var authenticatedSession;

    beforeAll(function (done) {
        testSession.post("/auth/login")
            .set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({ "username": "user", "password": "password" })
            .expect(302)
            .end(function (err) {
                if (err) return done(err)
                authenticatedSession = testSession;
                return done();
            })
    })

    it('POST /profile/getUserData - should redirect if unauthenticated', async () => {
        const response = await request(app)
            .post('/profile/getUserData')
            .expect(302);
    });

    it('POST /profile/getUserData - should get profile information', async () => {
        const response = await authenticatedSession.post('/profile/getUserData')
            .expect(200);
    });

    it('POST /profile/updateUserData - should redirect if unauthenticated', async () => {
        const response = await request(app)
            .post('/profile/updateUserData')
            .send(mockProfile)
            .expect(302);
    });

    it('POST /profile/updateUserData - should update profile information and redirect', async () => {
        const response = await authenticatedSession.post('/profile/updateUserData')
            .send(mockProfile)
            .expect(302);
    });

    it('POST /profile/updateUserData - should return 400 if name is too long', async () => {
        const response = await authenticatedSession.post('/profile/updateUserData')
            .send(mockProfileBadName)
            .expect(400);
    });

    it('POST /profile/updateUserData - should return 400 if address is too long', async () => {
        const response = await authenticatedSession.post('/profile/updateUserData')
            .send(mockProfileBadAddress)
            .expect(400);
    });

});
