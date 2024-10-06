import winston from 'winston';


// Configuração do logger (Não foi utilizado no projeto)
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'gerador-de-corridas' },
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  
  ],
});

export default logger;
