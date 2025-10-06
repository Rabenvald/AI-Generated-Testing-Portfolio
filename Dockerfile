FROM mcr.microsoft.com/playwright:v1.43.1

WORKDIR /app
COPY . .

RUN npm install
RUN npx playwright install

CMD ["npx", "cucumber-js"]