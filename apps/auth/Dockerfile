FROM node:alpine

WORKDIR /app

RUN node --version

#add python and make

RUN apk add --no-cache python3 make g++

COPY ./dist/apps/auth /app

COPY package.json /app

COPY package-lock.json /app

RUN npm install

CMD ["node", "main.js"]



