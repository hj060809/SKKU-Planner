ARG ADMIN_GRAPHQL_ENDPOINT="https://skkuduler.duckdns.org:4001/graphql"
ARG CLIENT_GRAPHQL_ENDPOINT="https://skkuduler.duckdns.org:4000/graphql"

FROM node:22.18.0-alpine AS base

### BUILD ###
FROM base AS build

WORKDIR /build

COPY pnpm-workspace.yaml .
COPY package.json .
COPY pnpm-lock.yaml .
COPY apps/frontend/package.json apps/frontend/

RUN corepack enable && pnpm install --frozen-lockfile

COPY apps/frontend apps/frontend
COPY apps/backend/scheme.gql apps/backend/

WORKDIR /build/apps/frontend

ARG ADMIN_GRAPHQL_ENDPOINT
ARG CLIENT_GRAPHQL_ENDPOINT

ENV NEXT_PUBLIC_ADMIN_GRAPHQL_ENDPOINT=${ADMIN_GRAPHQL_ENDPOINT}
ENV NEXT_PUBLIC_CLIENT_GRAPHQL_ENDPOINT=${CLIENT_GRAPHQL_ENDPOINT}

RUN pnpm build

### PRODUCTION ###
FROM base AS production

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Set the correct permission for prerender cache
RUN mkdir -p apps/frontend/.next
RUN chown nextjs:nodejs apps/frontend/.next

COPY --from=build --chown=nextjs:nodejs /build/apps/frontend/.next/static ./apps/frontend/.next/static
COPY --from=build --chown=nextjs:nodejs /build/apps/frontend/public ./apps/frontend/public

USER nextjs

ENV NODE_ENV=production

ARG ADMIN_GRAPHQL_ENDPOINT
ARG CLIENT_GRAPHQL_ENDPOINT

ENV NEXT_PUBLIC_ADMIN_GRAPHQL_ENDPOINT=${ADMIN_GRAPHQL_ENDPOINT}
ENV NEXT_PUBLIC_CLIENT_GRAPHQL_ENDPOINT=${CLIENT_GRAPHQL_ENDPOINT}

CMD ["node", "apps/frontend/server.js"]