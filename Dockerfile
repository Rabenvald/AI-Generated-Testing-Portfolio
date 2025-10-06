# Use a base Node image
FROM mcr.microsoft.com/playwright:v1.32.0-focal

# (The above includes necessary browser dependencies for Playwright)

# Set working directory
WORKDIR /usr/src/app

# Copy package manifests
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy rest of sources
COPY . .

# Build TypeScript (optional, you can compile on the fly via ts-node)
RUN npm run build

# Default command (you can override in docker-compose)
CMD ["npm", "test"]
