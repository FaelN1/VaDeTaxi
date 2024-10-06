// src/main.ts

import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import corridaRoutes from './interfaces/routes/corridaRoutes';
import errorHandler from './interfaces/middlewares/errorHandler';
import setupSwagger from './interfaces/docs/swagger';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/corridas', corridaRoutes);

// Configuração do Swagger
setupSwagger(app);

// Middleware de tratamento de erros deve ser colocado após as rotas e Swagger
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
