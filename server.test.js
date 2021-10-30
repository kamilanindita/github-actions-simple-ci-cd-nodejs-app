const app = require('./server');
const supertest = require('supertest');
const httpStatus = require('http-status');

describe('GET /', () => {
    it('can get root endpoint', async () => {
        const res = await supertest(app)
            .get('/')
            .expect(httpStatus.OK);

        expect(res.text).toBe('This App is running');
    })
});

describe('GET /hello:name', () => {
    it('can get hello endpoint with name parameter Kamil', async () => {
        const res = await supertest(app)
            .get('/hello/Kamil')
            .expect(httpStatus.OK)

        expect(res.body.data).toBe('Hello, Kamil !')
    })
});
  