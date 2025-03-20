import request from 'supertest';

import app from '@/app';
import connection from '@/database/connection';

describe('/profile', () => {
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.migrate.rollback();
    await connection.destroy();
  });

  describe('GET', () => {
    it('should return 400 Bad Request if no authorization header is provided', async () => {
      // Act
      const response = await request(app).get('/profile');

      // Assert
      expect(response.status).toBe(400);
    });

    it('should return incidents from authenticated NGO', async () => {
      // Arrange
      const ngoData = {
        id: '12345678',
        name: 'Abrigo de Animais Au Family',
        email: 'contato.aufamilyabrigo@gmail.com',
        whatsapp: '91985255716',
        city: 'Belém',
        state: 'PA',
      };
      const incidentData = {
        ngo_id: ngoData.id,
        title: 'Novo Abrigo Au Family',
        description:
          'Somos um abrigo de animais de Belém do Pará que cuida de quase 700 animais vitimas de maus tratos. Hoje estamos vivendo o nosso maior desafio, que é construir um novo abrigo para todos os nossos animais em apenas 120 dias.',
        value: 200,
      };
      const expectedResponse = [incidentData];
      await connection('ngos').insert(ngoData);
      await connection('incidents').insert(incidentData);

      // Act
      const response = await request(app)
        .get('/profile')
        .set('Authorization', ngoData.id);

      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toMatchObject(expectedResponse);
    });
  });
});
