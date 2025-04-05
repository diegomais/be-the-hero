import request from 'supertest';

import app from '../../src/app';
import connection from '../../src/database/connection';

describe('/ngos', () => {
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.migrate.rollback();
    await connection.destroy();
  });

  describe('POST', () => {
    it('should be able to create a new NGO', async () => {
      // Arrange
      const ngoData = {
        name: 'AJAPRA - Associação Jaraguaense Protetora dos Animais',
        email: 'ajapra@ajapra.org.br',
        whatsapp: '47916420136',
        city: 'Jaraguá do Sul',
        state: 'SC',
      };

      // Act
      const response = await request(app).post('/ngos').send(ngoData);

      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
    });
  });

  describe('GET', () => {
    it('should be able to list registered NGOs', async () => {
      // Arrange
      const ngo1Data = {
        id: '12345678',
        name: 'AJAPRA - Associação Jaraguaense Protetora dos Animais',
        email: 'ajapra@ajapra.org.br',
        whatsapp: '47916420136',
        city: 'Jaraguá do Sul',
        state: 'SC',
      };
      const ngo2Data = {
        id: '87654321',
        name: 'Anjos de Patas - Proteção Animal',
        email: 'orandilia.faria@hotmail.com',
        whatsapp: '47912345678',
        city: 'Porto Belo',
        state: 'SC',
      };
      const ngo3Data = {
        id: '13579246',
        name: 'Associação Viva Bicho de Proteção aos Animais',
        email: 'vivabicho@vivabicho.org',
        whatsapp: '4732631020',
        city: 'Balneário Camboriú',
        state: 'SC',
      };
      const ngosData = [ngo1Data, ngo2Data, ngo3Data];
      const expectedResponse = ngosData.map(({ id: _, ...ngo }) => ngo);
      await connection('ngos').insert(ngosData);

      // Act
      const response = await request(app).get('/ngos');

      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toEqual(expect.arrayContaining(expectedResponse));
    });
  });
});
