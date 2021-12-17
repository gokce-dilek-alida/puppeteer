// module.exports = {
//   launch: {
//     dumpio: true,
//     headless: process.env.HEADLESS === "true",
//     args: ["--disable-infobars", "--window-size=1200,800"],
//     defaultViewport: null,
//     // devtools: true,
//     slowMo: 200,
//   },
//   browserContext: "default",
// };
const caps_chrome = {
  browser: "chrome",
  browser_version: "latest",
  os: "osx",
  os_version: "big sur",
  name: "Puppeteer-jest responding test on Chrome",
  build: "puppeteer-jest-build-responding",
  "browserstack.username": "wolfcore_ib9zh6",
  "browserstack.accessKey": "Vn8Ao7yQaodDqxzdHEiB",
};

const caps_firefox = {
  browser: "firefox",
  browser_version: "latest",
  os: "osx",
  os_version: "big sur",
  name: "Puppeteer-jest responding test on Firefox",
  build: "puppeteer-jest-build-responding",
  "browserstack.username": "wolfcore_ib9zh6",
  "browserstack.accessKey": "Vn8Ao7yQaodDqxzdHEiB",
};

const caps_edge = {
  browser: "edge",
  browser_version: "latest",
  os: "osx",
  os_version: "big sur",
  name: "Puppeteer-jest responding test on Edge",
  build: "puppeteer-jest-build-responding",
  "browserstack.username": "wolfcore_ib9zh6",
  "browserstack.accessKey": "Vn8Ao7yQaodDqxzdHEiB",
};

module.exports = {
  connect: {
    browserWSEndpoint: `wss://cdp.browserstack.com/puppeteer?caps=${encodeURIComponent(
      JSON.stringify(caps_chrome)
    )}`,
  },
};
