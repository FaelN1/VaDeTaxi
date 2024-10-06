// jest.config.js

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest', // Utiliza o preset do ts-jest para lidar com TypeScript
  testEnvironment: 'node', // Define o ambiente de teste como Node.js
  roots: ['<rootDir>/tests'], // Define a pasta onde os testes estão localizados
  moduleFileExtensions: ['ts', 'js', 'json', 'node'], // Extensões de arquivos que o Jest reconhecerá
  transform: {
    '^.+\\.ts$': 'ts-jest', // Transforma arquivos .ts usando ts-jest
  },
  collectCoverage: true, // Coleta cobertura de testes
  coverageDirectory: 'coverage', // Diretório onde a cobertura será armazenada
  coverageReporters: ['text', 'lcov'], // Formatos de relatório de cobertura
};
