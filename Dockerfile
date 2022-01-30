FROM node:16.13.2 as build

WORKDIR /src

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci --production

COPY . .

RUN npm run build