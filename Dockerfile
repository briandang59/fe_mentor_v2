# ----------------------------
# Stage 1: Cài dependencies
FROM node:20-alpine AS deps
WORKDIR /app

# Copy file package để cache dependency
COPY package*.json ./

# Cài dependencies với npm ci (nhanh + stable)
RUN npm ci

# ----------------------------
# Stage 2: Build app
FROM node:20-alpine AS builder
WORKDIR /app

# Copy node_modules từ stage deps
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Next.js app
RUN npm run build

# ----------------------------
# Stage 3: Chạy production
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy các file cần thiết để chạy
COPY --from=builder /app/package*.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

# Chạy Next.js server
CMD ["npm", "start"]
