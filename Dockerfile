# Sử dụng Node.js LTS
FROM node:20-alpine AS builder

# Tạo thư mục làm việc
WORKDIR /app

# Copy package và cài dependencies
COPY package*.json ./
RUN npm install

# Copy toàn bộ code vào container
COPY . .

# Build Next.js app (tạo .next)
RUN npm run build

# ----------------------------
# Stage chạy production
FROM node:20-alpine AS runner

WORKDIR /app

# Chỉ copy những file cần thiết để chạy
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]
