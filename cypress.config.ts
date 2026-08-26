import { defineConfig } from 'cypress';

const baseUrl =
  process.env.BASE_URL ??
  'https://prices-client-418500670631.southamerica-east1.run.app';

export default defineConfig({
  e2e: {
    baseUrl,
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    video: false,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      config.baseUrl = process.env.BASE_URL ?? config.baseUrl;
      config.env.apiBaseUrl =
        process.env.API_BASE_URL ??
        'https://prices-ms-core-dev-418500670631.southamerica-east1.run.app/api/v1/prices';
      return config;
    },
  },
});
