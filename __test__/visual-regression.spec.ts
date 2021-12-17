import surveyPo from "./pages/classic-survey.po";
const { toMatchImageSnapshot } = require("jest-image-snapshot");

expect.extend({ toMatchImageSnapshot });

describe("Visual regression", () => {
  beforeAll(async () => {
    await surveyPo.navigate(
      "https://gokce.van.sit1.vcilabs.com/s/Preview/4d677aae-4c12-42dd-9266-841d2a22ee75?_themeSelectionEnabled=true&_themeId=664171e1-fe4c-431c-8f79-ad280142c3de&_sup=mailto%3anoreply%40vccommunities.com&_userSpecifiedCulture=en&_locale=en-CA&_rid=DlEk0M_Va!lpDW3O7p9fnMoJIHturAyGTY6Btn3domagGhcIJi6mGN!cQmGqR0wFV6kxy57UGjo5KcEelNAxYXOqxRbKOzOyzGuxfu!j!c_fscULl0oFo4TaoqmS2M93p3mA8twlgO0Mav07MDvFXIYvFt!q2bwH3!bwlk4RvszK0dQnF897PQ!I_bx2fquCwa_uWpTTprmgXO5Oz0ykWsyRFnp70fdl51Y6SqhCxm2SEGP4oz5!dnc2VJJXokoOI2ija4a8BDGstbN4AN35d90BXZYJOv!klH251wzWQsYftNqq3cqXLw--&_view=d"
    );
  });

  // a specific element
  it("should render open ended question", async () => {
    const openEndInput = await page.waitForSelector(".textareaContainer");
    const image = await openEndInput.screenshot();
    expect(image).toMatchImageSnapshot({
      failureThresholdType: "pixel",
      failureThreshold: 500,
    });
  });

  // the whole page
  it("should render open ended question page", async () => {
    await page.waitForTimeout(3000);
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      failureThresholdType: "pixel",
      failureThreshold: 500,
    });
    const nextButtonSelector = "#Next";
    await page.waitForSelector(nextButtonSelector);
    await page.click(nextButtonSelector);
  });
});
