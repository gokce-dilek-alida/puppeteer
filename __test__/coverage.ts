const puppeteer = require("puppeteer");
const fs = require("fs");
const pti = require("puppeteer-to-istanbul");

const coverage = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Start coverage
  await Promise.all([
    page.coverage.startJSCoverage(),
    page.coverage.startCSSCoverage(),
  ]);
  // Navigate to page
  await page.goto(
    "https://gokce.van.sit1.vcilabs.com/s/Preview/4d677aae-4c12-42dd-9266-841d2a22ee75?_themeSelectionEnabled=true&_themeId=664171e1-fe4c-431c-8f79-ad280142c3de&_sup=mailto%3anoreply%40vccommunities.com&_userSpecifiedCulture=en&_locale=en-CA&_rid=DlEk0M_Va!lpDW3O7p9fnMoJIHturAyGTY6Btn3domagGhcIJi6mGN!cQmGqR0wFV6kxy57UGjo5KcEelNAxYXOqxRbKOzOyzGuxfu!j!c_fscULl0oFo4TaoqmS2M93p3mA8twlgO0Mav07MDvFXIYvFt!q2bwH3!bwlk4RvszK0dQnF897PQ!I_bx2fquCwa_uWpTTprmgXO5Oz0ykWsyRFnp70fdl51Y6SqhCxm2SEGP4oz5!dnc2VJJXokoOI2ija4a8BDGstbN4AN35d90BXZYJOv!klH251wzWQsYftNqq3cqXLw--&_view=d"
  );
  await page.waitForSelector("title");

  // Report load time perf
  const loadtimeMetrics = await page.evaluate(() =>
    JSON.stringify(window.performance)
  );
  console.info("Load time metrics");
  console.info(JSON.parse(loadtimeMetrics));

  // Report runtime perf
  const runtimeMetrics = await page.metrics();
  console.info("Runtime metrics");
  console.info(runtimeMetrics);

  // Stop coverage
  const [jsCoverage, cssCoverage] = await Promise.all([
    page.coverage.stopJSCoverage(),
    page.coverage.stopCSSCoverage(),
  ]);
  fs.writeFile("coverage.json", JSON.stringify(jsCoverage), () => {});
  pti.write([...jsCoverage, ...cssCoverage]);
  await browser.close();
};

coverage();
