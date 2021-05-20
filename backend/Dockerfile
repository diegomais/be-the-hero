FROM node:12-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ENV DATABASE_HOST=postgres
ENV DATABASE_NAME=be_the_hero
ENV DATABASE_PASSWORD=secret
ENV DATABASE_PORT=5432
ENV DATABASE_USER=docker

EXPOSE 3333

CMD yarn dev
