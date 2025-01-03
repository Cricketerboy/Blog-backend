# Step 1: Build Stage
FROM node:16 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Step 2: Production Stage
FROM node:16-slim

# Set working directory
WORKDIR /app

# Copy the application code from the build stage
COPY --from=builder /app /app

# Expose port
EXPOSE 5001

# Run the application
CMD ["node", "app.js"]
