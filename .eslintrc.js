// .eslintrc.js

module.exports = {
    parser: '@typescript-eslint/parser', // Define o parser para TypeScript
    extends: [
      'plugin:@typescript-eslint/recommended', // Regras recomendadas para TypeScript
      'plugin:prettier/recommended', // Integração com Prettier
    ],
    plugins: ['@typescript-eslint', 'prettier'], // Plugins utilizados
    env: {
      node: true, // Ambiente Node.js
      jest: true, // Ambiente Jest
    },
    rules: {
      'prettier/prettier': 'error', // Erros de Prettier serão reportados como erros do ESLint
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Exemplo de regra personalizada
    },
  };
  