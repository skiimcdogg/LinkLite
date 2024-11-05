# Étape de build du frontend avec Node
FROM node:20-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

CMD ["cp", "-r", "/app/build", "/app/build/"]
