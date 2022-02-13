const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
const generateUniqueId = require('../../src/utils/generateUniqueId');

const ngo1_data = {
  name: 'Abrigo de Animais Au Family',
  email: 'contato.aufamilyabrigo@gmail.com',
  whatsapp: '91985255716',
  city: 'Belém',
  state: 'PA',
};

const incident1_data = {
  title: 'Novo Abrigo Au Family',
  description:
    'Somos um abrigo de animais de Belém do Pará que cuida de quase 700 animais vitimas de maus tratos. Hoje estamos vivendo o nosso maior desafio, que é construir um novo abrigo para todos os nossos animais em apenas 120 dias.',
  value: 200,
};
let responseCreateNgo = {};
let responseCreateIncident = {};

describe('Incident', () => {
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.migrate.rollback();
    await connection.destroy();
  });

  it('should be able to create a new incident', async () => {
    responseCreateNgo = await request(app).post('/ngos').send(ngo1_data);
    responseCreateIncident = await request(app)
      .post('/incidents')
      .send(incident1_data)
      .set('Authorization', String(responseCreateNgo.body.id));

    expect(responseCreateIncident.body).toHaveProperty('id');
  });

  it('should be able to list incidents', async () => {
    const responseListIncident = await request(app).get('/incidents');

    expect(responseListIncident.body).toMatchObject([incident1_data]);
  });

  it('should return an error if deleting an nonexistent incident', async () => {
    const response = await request(app)
      .delete(`/incidents/0`)
      .set('Authorization', responseCreateNgo.body.id);

    expect(response.status).toBe(404);
  });

  it('another NGO should not be able to delete an incident', async () => {
    const response = await request(app)
      .delete(`/incidents/${responseCreateIncident.body.id}`)
      .set('Authorization', generateUniqueId());

    expect(response.status).toBe(401);
  });

  it('should return status 200 after deleting an incident', async () => {
    const response = await request(app)
      .delete(`/incidents/${responseCreateIncident.body.id}`)
      .set('Authorization', responseCreateNgo.body.id);

    expect(response.status).toBe(204);
  });
});
