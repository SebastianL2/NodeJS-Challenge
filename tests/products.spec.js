import request from 'supertest';
import app from '../app.js';

describe('Pruebas para los endpoints de productos', () => {
  let authToken;

  beforeAll(async () => {
    // Iniciar sesión para obtener token de autenticación
    const signInResponse = await request(app)
      .post('/v1/users/signIn')
      .send({ email: 'wills@example.com', password: '12345S#' })
      .set('Content-Type', 'application/json');
    authToken = signInResponse.body.token;
  });

  test('Obtener precios por usuarios para un producto específico', async () => {
    const userId = '65ff9025bd84a2931721afc2';
    const productName = 'Nike Air Max';
  
    const response = await request(app)
      .get(`/v1/products/price/${userId}/${encodeURIComponent(productName)}`)
      .set('Content-Type', 'application/json');
  
    expect(response.statusCode).toBe(200);
     });
  
     test('Obtener todos los productos', async () => {
    const response = await request(app)
      .get('/v1/products')
      .set('Content-Type', 'application/json');
  
    expect(response.statusCode).toBe(200);
    // Agregar más expectativas según sea necesario para verificar los datos de respuesta
  });

  test('Actualizar un producto por su ID', async () => {
    const productId = '65ff929d65259bca46f1a252';
    const updatedProductData = {
      "name": "Nike Air Max",
      "description": "The Nike Air Max sneakers provide cushioning and support for all-day comfort.",
      "stock": 100,
      "price": 129.99,
      "brand_special_price": [
        {
          "userId": "65ff47525b747f326a8a8667",
          "special_price": 99.99
        },
        {
          "userId": "65ff4454fa182ea253363ed3",
          "special_price": 89.99
        }
      ]
    };
  
    const response = await request(app)
      .patch(`/v1/products/${productId}`)
      .send(updatedProductData)
      .set('x-access-token', authToken)
      .set('Content-Type', 'application/json');
  
    expect(response.statusCode).toBe(200);
    // Agregar más expectativas según sea necesario para verificar los datos de respuesta
  });
  

});