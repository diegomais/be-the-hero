const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

const ngo1_data = {
  name: 'AJAPRA - Associação Jaraguaense Protetora dos Animais',
  email: 'ajapra@ajapra.org.br',
  whatsapp: '47916420136',
  city: 'Jaraguá do Sul',
  uf: 'SC',
};
const ngo2_data = {
  name: 'Anjos de Patas - Proteção Animal',
  email: 'orandilia.faria@hotmail.com',
  whatsapp: '47912345678',
  city: 'Porto Belo',
  uf: 'SC',
};
const ngo3_data = {
  name: 'Associação Viva Bicho de Proteção aos Animais',
  email: 'vivabicho@vivabicho.org',
  whatsapp: '4732631020',
  city: 'Balneário Camboriú',
  uf: 'SC',
};

describe('NGO', () => {
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.migrate.rollback();
    await connection.destroy();
  });

  it('should be able to create a new NGO', async () => {
    const response = await request(app).post('/ngos').send(ngo1_data);

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });

  it('should be able to list registered NGOs', async () => {
    await request(app).post('/ngos').send(ngo1_data);
    await request(app).post('/ngos').send(ngo2_data);
    await request(app).post('/ngos').send(ngo3_data);
    const response = await request(app).get('/ngos');

    expect(response.body).toEqual(
      expect.arrayContaining([ngo1_data, ngo2_data, ngo3_data])
    );
  });
});
