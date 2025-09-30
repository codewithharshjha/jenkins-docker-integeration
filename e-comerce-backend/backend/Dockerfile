# Use official Node.js LTS image
FROM node:20.18.0-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy source code
COPY . .

# Expose backend port
EXPOSE 3001

# Start backend
CMD ["npm", "dev"]
