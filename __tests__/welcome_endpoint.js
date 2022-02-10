/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

it('gets the welcome endpoint', async () => {
  const response = await request.get('/');

  expect(response.status).toBe(200);
  expect(response.body.message).toBe('Herzlich Wilkommen!!!');
});
