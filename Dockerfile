FROM node:16.13.2 as build

WORKDIR /src

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci --production

COPY . .

RUN npm run build

FROM nginx:stable-alpine as prod

COPY --from=build /src/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]