### STAGE 1: Builder ###
FROM node:22.18.0-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

RUN pnpm prune --prod

### STAGE 2: Production ###
FROM node:22.18.0-alpine