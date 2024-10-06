import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';

// Definição das opções do Swagger
const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Gerador de Corridas API',
      version: '1.0.0',
      description: 'API para gerenciar corridas seguindo regras de negócio predefinidas.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de Desenvolvimento',
      },
    ],
  },
  apis: ['./src/interfaces/routes/*.ts'], // Caminho para os arquivos de rotas
};

// Geração da especificação Swagger
const specs = swaggerJsdoc(options);

// Função para configurar o Swagger no Express
const setupSwagger = (app: Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

export default setupSwagger;
