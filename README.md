# Gerador de Corridas
**Este é o meu teste técnico para a empresa Va De Taxi.**

**Descrição**

O **Gerador de Corridas** é uma aplicação desenvolvida em **Node.js** utilizando **Express** e **TypeScript**. Ela permite criar e cancelar corridas para usuários, seguindo regras de negócio predefinidas. A aplicação é construída com foco em **simplicidade**, **código limpo** e **escalabilidade**, adotando os princípios **SOLID** e a **Clean Architecture** para garantir uma estrutura robusta e de fácil manutenção.

**Tecnologias e Justificativas**
- **Node.js**: Plataforma JavaScript runtime eficiente e escalável, ideal para construir APIs rápidas.
- **Express**: Framework minimalista para construção de APIs, oferecendo flexibilidade e uma vasta gama de middlewares.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, melhorando a qualidade e a segurança do código
- **Prisma**: ORM moderno que facilita o gerenciamento do banco de dados SQLite, proporcionando uma integração segura e eficiente com o TypeScript.
- **Joi**: Biblioteca de validação de esquemas para garantir a integridade dos dados recebidos nas requisições.
- **Jest**: Framework de testes para garantir a confiabilidade e corretude da aplicação.
- **ESLint** & Prettier: Ferramentas para linting e formatação de código, assegurando consistência e padrões de código elevados.
- **Nodemon**: Utilizado no desenvolvimento para reiniciar automaticamente o servidor em caso de alterações no código.
- **Docker**: Facilita a containerização da aplicação, garantindo ambientes consistentes para desenvolvimento e produção.
- **Swagger**: Ferramenta poderosa para documentação e teste de APIs RESTful. Utiliza a especificação OpenAPI para criar uma documentação interativa que facilita a compreensão e o consumo dos endpoints da aplicação. Com o Swagger UI integrado, desenvolvedores e stakeholders podem visualizar, testar e validar as funcionalidades da API diretamente no navegador, melhorando a colaboração e agilizando o desenvolvimento e manutenção do projeto.

### Estrutura do Projeto
```css
VaDeTaxi/
├── src/
│   ├── application/
│       ├── interfaces
│       ├── usecases
│   ├── domain/
│       ├──entities
│       ├──valueObjects
│   ├── infrastructure/
│       ├── database
│       ├── repositorie
│   ├── interfaces/
│       ├── controllers
│       ├── docs
│       ├── middlewares
│       ├── routes
│       ├── validators
│   ├── shared/
│       ├── errors
│       ├── utils
│   └── main.ts
├── tests/
│   ├── integration/
│   ├── unit/
│       ├── application
│       ├── domain
├── prisma/
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
├── jest.config.js
├── Dockerfile
├── docker-compose.yml
└── README.md
```
### Como Rodar o Projeto
**1. Pré-requisitos**
- Node.js (v14 ou superior)
- npm (v6 ou superior)
- Docker (opcional, para containerização)

**2. Clonar o Repositório**
```bash
git clone  https://github.com/faeln1/vadetaxi
cd vadetaxi
```
**3. Instalar as Dependências**
```bash
npm install
```

**4. Configurar Variáveis de Ambiente**
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

```env
DATABASE_URL="file:./prisma/dev.db"
PORT=3000
```

**5. Configuração do Banco de Dados com Prisma**
Inicialize o esquema do Prisma e realize as migrações:

```bash
npx prisma migrate dev --name init
npx prisma generate
```
**6. Executar a Aplicação**
Modo de Desenvolvimento
Inicie a aplicação com hot-reloading:

```bash
npm run dev
```
A aplicação estará disponível em http://localhost:3000.

Modo de Produção
Compile o código TypeScript e inicie a aplicação:

```bash
npm run build
npm start
```
**7. Executar os Testes**
Execute as suítes de testes utilizando o Jest:

```bash
npm test
```
**8. Dockerização (Opcional)**
Construir a Imagem Docker

```bash
docker build -t vadetaxi .
```

**Executar o Container**

```bash
docker run -p 3000:3000 vadetaxi
```
**Ou, utilizando o Docker Compose:**

```bash
docker-compose up --build
```

### Notas Adicionais
**Validação de Dados:** A aplicação utiliza Joi para validar os dados das requisições, garantindo que apenas informações válidas sejam processadas.

**Tratamento de Erros:** Implementação de um middleware centralizado para tratamento de erros, assegurando respostas consistentes e informativas.

**Arquitetura Limpa:** A aplicação segue os princípios da Clean Architecture, promovendo uma separação clara de responsabilidades e facilitando a manutenção e a escalabilidade.

**Logging:** Utilização de winston para logging básico, podendo ser expandido conforme necessário.