import request from 'supertest';
import app from '../app.js'; 
describe('Pruebas para los endpoints de products', () => {
  let authToken;

  beforeAll(async () => {
   
    const signInResponse = await request(app)
      .post('/v1/users/signIn')
      .send({ email: 'wills@example.com', password: '12345S#' })
      .set('Content-Type', 'application/json');
    authToken = signInResponse.body.token;
  });

  test('Obtener products privados con token de autenticación', async () => {
    const response = await request(app)
      .get('/v1/products/privates')
      .set('x-access-token', authToken)
      .set('Content-Type', 'application/json');

    expect(response.statusCode).toBe(200);
   
  });

  test('Obtener products públicos sin autenticación', async () => {
    const response = await request(app)
      .get('/v1/products/publics')
      .set('Content-Type', 'application/json');

    expect(response.statusCode).toBe(200);
   
  });

  test('Obtener todos los products con token de autenticación', async () => {
    const response = await request(app)
      .get('/v1/products')
      .set('x-access-token', authToken)
      .set('Content-Type', 'application/json');

    expect(response.statusCode).toBe(200);
   
  });

});
