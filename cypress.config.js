const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'hgpw58',
  e2e: {
    setupNodeEvents(on, config) { },
    baseUrl: 'https://staging-pulse.herokuapp.com',
    watchForFileChanges: true,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx}',
    supportFile: 'cypress/support/index.js',
    experimentalRunAllSpecs: true,
    circleCI: false,
  },

  chromeWebSecurity: false,
  retries: 3,
  watchForFileChanges: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  fixturesFolder: 'cypress/fixtures',
  requestTimeout: 30000,
  responseTimeout: 30000,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 10000,

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'reports/mochawesome',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    quiet: true,
  },
});
