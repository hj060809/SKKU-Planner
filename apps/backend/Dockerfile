### STAGE 1: Builder ###
ARG TARGET=client

FROM node:22.18.0-alpine AS builder
ARG TARGET

COPY . /build
WORKDIR /build

RUN npm install -g pnpm
RUN pnpm --filter="backend" deploy out --legacy

WORKDIR /build/out
RUN npx prisma generate
RUN npm run build ${TARGET}

### STAGE 2: Production ###
FROM node:22.18.0-alpine

ARG TARGET
ENV TARGET=${TARGET}
ENV NODE_ENV=production

COPY --from=builder /build/out /app
COPY ./apps/backend/entrypoint.sh /app
WORKDIR /app

ENTRYPOINT ["/app/entrypoint.sh"]