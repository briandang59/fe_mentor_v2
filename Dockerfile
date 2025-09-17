# ----------------------------
# Stage 1: Cài dependencies
FROM node:20-alpine AS deps
WORKDIR /app

# Copy package.json và package-lock.json (bắt buộc cho npm ci)
COPY package.json package-lock.json ./

# Dùng mirror để npm ci nhanh hơn và tránh timeout trên VPS
RUN npm config set registry https://registry.npmmirror.com \
 && npm ci

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
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]
