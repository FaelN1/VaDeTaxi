// tests/integration/CorridaController.spec.ts

import request from 'supertest';
import express, { Application } from 'express';
import corridaRoutes from '../../src/interfaces/routes/corridaRoutes';
import errorHandler from '../../src/interfaces/middlewares/errorHandler';
import prisma from '../../src/infrastructure/database/sqlite';

const app: Application = express();
app.use(express.json());
app.use('/api/corridas', corridaRoutes);
app.use(errorHandler);

describe('CorridaController Integration Tests', () => {
  beforeAll(async () => {
    await prisma.corrida.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('should create a new corrida', async () => {
    const response = await request(app)
      .post('/api/corridas')
      .send({
        usuarioId: 123,
        origem: 'Origin A',
        destino: 'Destination B',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('usuarioId', 123);
    expect(response.body).toHaveProperty('origem', 'Origin A');
    expect(response.body).toHaveProperty('destino', 'Destination B');
    expect(response.body).toHaveProperty('status', 'PENDENTE');
  });

  it('should cancel an existing corrida', async () => {
    // First, create a corrida
    const createResponse = await request(app)
      .post('/api/corridas')
      .send({
        usuarioId: 456,
        origem: 'Origin C',
        destino: 'Destination D',
      });

    const corridaId = createResponse.body.id;

    // Now, cancel the corrida
    const cancelResponse = await request(app).delete(`/api/corridas/${corridaId}`);

    expect(cancelResponse.status).toBe(200);
    expect(cancelResponse.body).toHaveProperty('message', 'Corrida successfully canceled');
  });

  it('should return 400 when cancelling a non-existent corrida', async () => {
    const response = await request(app).delete('/api/corridas/9999');

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message', 'Corrida not found');
  });
});
