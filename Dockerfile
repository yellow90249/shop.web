FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/.output /app/.output

EXPOSE 8002

ENV PORT=8002
ENV NODE_ENV=production

CMD ["node", ".output/server/index.mjs"]