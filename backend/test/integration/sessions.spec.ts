import request from 'supertest';

import app from '@/app';
import connection from '@/database/connection';

describe('/sessions', () => {
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.migrate.rollback();
    await connection.destroy();
  });

  describe('POST', () => {
    it('should return an error if NGO does not exist', async () => {
      // Arrange
      const requestBody = { id: 'invalid-id' };
      const expectedResponse = { error: 'No NGOs found with this ID.' };

      // Act
      const response = await request(app).post('/sessions').send(requestBody);

      expect(response.status).toBe(400);
      expect(response.body).toEqual(expectedResponse);
    });

    it('should return NGO data if NGO exists', async () => {
      // Arrange
      const ngoData = {
        id: '12345678',
        name: 'AJAPRA - Associação Jaraguaense Protetora dos Animais',
        email: 'ajapra@ajapra.org.br',
        whatsapp: '47916420136',
        city: 'Jaraguá do Sul',
        state: 'SC',
      };
      await connection('ngos').insert(ngoData);
      const requestBody = { id: ngoData.id };
      const expectedResponse = { name: ngoData.name };

      // Act
      const response = await request(app).post('/sessions').send(requestBody);

      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toEqual(expectedResponse);
    });
  });
});
