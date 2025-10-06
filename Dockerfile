FROM mcr.microsoft.com/playwright:v1.32.0-focal

WORKDIR /usr/src/app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "test"]