FROM node:18 as build-deps

WORKDIR /app
COPY package.json ./
RUN npm install

COPY . ./

CMD node index.js