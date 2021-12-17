# Puppeteer with BrowserStack

### Running BrowserStack - Automate

1. `npm run test` to run all tests
2. `npm run test -- carousel.spec.ts` to run a specific test file
3. View the results: Login to BrowserStack and navigate to https://automate.browserstack.com/dashboard/v2/builds

### Running BrowserStack - Percy

1. Set Percy token: `$Env:PERCY_TOKEN="acc2da455b1267c31e366874d9f20388877a666c1c969cea6f83289978a87e09"` (example for Powershell)
2. `npm run snaptest` to run snapshot tests
3. View the results: Login to BrowserStack and navigate to https://percy.io/5abf6311/gokce-first-percy-test

### Notes

1. BrowserStack account information can be configured in `jest-puppeteer.config.js`
2. Resources:

- https://docs.percy.io/docs/puppeteer
- https://docs.percy.io/docs/puppeteer-tutorial
- https://www.browserstack.com/docs/automate/puppeteer/jest
- https://www.browserstack.com/docs/automate/puppeteer
- https://github.com/browserstack/puppeteer-browserstack
- https://github.com/percy/example-percy-puppeteer

More information can be found in [this ticket](https://alidacxm.atlassian.net/browse/SRV-1357).
