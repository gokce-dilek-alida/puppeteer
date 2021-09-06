module.exports = {
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS === "true",
    args: ["--disable-infobars", "--window-size=1200,800"],
    defaultViewport: null,
    devtools: true,
    // slowMo: 200,
  },
  browserContext: "default",
};
