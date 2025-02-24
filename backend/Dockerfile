# Set base image
FROM node:22-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Production image, copy all the files and run app
FROM base
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV DATABASE_HOST=postgres
ENV DATABASE_PORT=5432
ENV DATABASE_NAME=be_the_hero
ENV DATABASE_PASSWORD=postgres
ENV DATABASE_USER=postgres
ENV NODE_ENV="production"
ENV HOSTNAME="0.0.0.0"
ENV PORT=3333

EXPOSE 3333

CMD ["yarn", "start"]
