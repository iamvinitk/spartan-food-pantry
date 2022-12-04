FROM node:alpine

COPY package.json .

RUN npm install

COPY . .

RUN nx build ui


