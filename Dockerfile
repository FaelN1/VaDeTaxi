# Use uma imagem base oficial do Node.js
FROM node:18-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package.json package-lock.json ./

# Instale as dependências
RUN npm install

# Copie todo o código-fonte para o diretório de trabalho
COPY . .

# Gera o Prisma Client com os binary targets corretos
RUN npx prisma generate

# Compile o código TypeScript
RUN npm run build

# Exponha a porta que a aplicação irá rodar
EXPOSE 3000

# Defina o comando para iniciar a aplicação
CMD ["npm", "start"]
