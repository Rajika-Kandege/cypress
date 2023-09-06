const { defineConfig } = require('cypress');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  projectId: "mhuqqg",
  "reporter": "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/",
    overwrite: true,
    html: true,
    json: true,
    timestamp: "mmddyyyy_HHMMss"
    
  },
  e2e: {
    setupNodeEvents(on, config) {
      // on('before:run', async (details) => {
      //   console.log('override before:run');
      //   await beforeRunHook(details);
      // });

      // on('after:run', async () => {
      //   console.log('override after:run');
      //   await afterRunHook();
      // });
    },
  },
});
