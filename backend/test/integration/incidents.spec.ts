import request from 'supertest';

import app from '@/app';
import connection from '@/database/connection';

describe('/incidents', () => {
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.migrate.rollback();
    await connection.destroy();
  });

  const ngoData = {
    id: '12345678',
    name: 'Abrigo de Animais Au Family',
    email: 'contato.aufamilyabrigo@gmail.com',
    whatsapp: '91985255716',
    city: 'Belém',
    state: 'PA',
  };
  const incidentData = {
    title: 'Novo Abrigo Au Family',
    description:
      'Somos um abrigo de animais de Belém do Pará que cuida de quase 700 animais vitimas de maus tratos. Hoje estamos vivendo o nosso maior desafio, que é construir um novo abrigo para todos os nossos animais em apenas 120 dias.',
    value: 200,
  };

  describe('POST', () => {
    it('should be able to create a new incident', async () => {
      // Arrange
      await connection('ngos').insert(ngoData);

      // Act
      const response = await request(app)
        .post('/incidents')
        .send(incidentData)
        .set('Authorization', String(ngoData.id));

      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
    });
  });

  describe('GET', () => {
    it('should be able to list incidents', async () => {
      // Arrange
      const expectedResponse = [incidentData];

      // Act
      const response = await request(app).get('/incidents');

      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toMatchObject(expectedResponse);
    });
  });

  describe('DELETE', () => {
    it('should return an error if deleting an nonexistent incident', async () => {
      // Arrange
      const id = '0';
      const expectedResponse = { error: 'Incident not found.' };

      // Act
      const response = await request(app)
        .delete(`/incidents/${id}`)
        .set('Authorization', ngoData.id);

      // Assert
      expect(response.status).toBe(404);
      expect(response.body).toMatchObject(expectedResponse);
    });

    it('should not be able to delete an incident from another NGO', async () => {
      // Arrange
      const id = 1;
      const expectedResponse = { error: 'Operation not permitted.' };

      // Act
      const response = await request(app)
        .delete(`/incidents/${id}`)
        .set('Authorization', 'invalid-id');

      // Assert
      expect(response.status).toBe(401);
      expect(response.body).toMatchObject(expectedResponse);
    });

    it('should return status 200 after deleting an incident', async () => {
      // Arrange
      const id = 1;

      // Act
      const response = await request(app)
        .delete(`/incidents/${id}`)
        .set('Authorization', ngoData.id);

      // Assert
      expect(response.status).toBe(204);
    });
  });
});
