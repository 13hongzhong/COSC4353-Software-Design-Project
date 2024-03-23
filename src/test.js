const request = require('supertest');
const app = require('./app');
const { mockFuelQuoteHistory, mockFuelQuote } = require('./mock/mockFuelData');
<<<<<<< HEAD
const { mockProfile, mockProfileBadAddress, mockProfileBadName } = require('./mock/mockProfileData');
const { mockLogin, mockLoginBadUsername, mockLoginBadPassword } = require('./mock/mockLoginData');


var testSession = session(app)
=======
>>>>>>> parent of e6f8db9 (add profile testing)


describe('Login Controller', () => {

    var authenticatedSession;

    beforeAll(function (done) {
        testSession.post("/auth/login")
            .send({ "username": "validuser", "password": "validpassword" })
            .expect(302)
            .end(function (err) {
                if (err) return done(err)
                authenticatedSession = testSession;
                return done();
            })
    })

    it('POST /api/login - should allow a user to log in with valid credentials', async () => {
      const loginData = { username: 'validuser', password: 'validpassword' };
      const response = await request(app)
        .post('/api/login')
        .send(loginData)
        .expect(200);

      expect(response.body).toHaveProperty('token');
    });

    it('POST /auth/login - should return 400 if password is too long', async () => {
        const response = await authenticatedSession.post('/auth/login')
            .send(mockLoginBadPassword)
            .expect(400);
    });

    it('POST /auth/login - should return 400 if password is too long', async () => {
        const response = await authenticatedSession.post('/auth/login')
            .send(mockLoginBadUsername)
            .expect(400);
    });


    it('POST /auth/login - should return 400 if both username and password are missing', async () => {
        const response = await request(app)
            .post('/auth/login')
            .send({}); // no input sent, so both username and password are missing
        expect(response.status).toBe(400);
    });


    it('POST /auth/login - should return 302 if authentication fails', async () => {
        const response = await request(app)
            .post('/auth/login')
            .send({ username: 'invaliduser', password: 'invalidpassword' }) //invalid data
            .expect(302);
    });

});

    



describe('Fuel Quote Controller', () => {
    it('GET /quote/history - should return fuel quote history', async () => {
        const response = await request(app)
            .get('/quote/history')
            .expect(200);

        // expect(response.body).toEqual({ history: mockFuelQuoteHistory });
    });

    it('POST /quote/create - should create a new fuel quote', async () => {
        const response = await request(app)
            .post('/quote/create')
            .send(mockFuelQuote)
            .expect(200);

        expect(response.body).toEqual({ message: 'Fuel quote created successfully' });
    });

    it('POST /quote/create - should return 400 if invalid input', async () => {
        const response = await request(app)
            .post('/quote/create')
            .send({}); // Invalid input
        expect(response.status).toBe(400);
    });
});


describe('')

