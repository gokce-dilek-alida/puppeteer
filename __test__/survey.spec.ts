import surveyPo from "./pages/classic-survey.po";
import fs from "fs";
// import puppeteer from "puppeteer";

// let browser: puppeteer.Browser;
// let page: puppeteer.Page;

describe("Respond to a survey", () => {
  beforeAll(async () => {
    // start to collect coverage info
    // await Promise.all([
    //   page.coverage.startJSCoverage(),
    //   page.coverage.startCSSCoverage(),
    // ]);
    // browser = await puppeteer.launch({ headless: false });
    // page = await browser.newPage();

    // navigate to the survey
    await surveyPo.navigate(
      "https://gokce.van.sit1.vcilabs.com/s/Preview/4d677aae-4c12-42dd-9266-841d2a22ee75?_themeSelectionEnabled=true&_themeId=664171e1-fe4c-431c-8f79-ad280142c3de&_sup=mailto%3anoreply%40vccommunities.com&_userSpecifiedCulture=en&_locale=en-CA&_rid=DlEk0M_Va!lpDW3O7p9fnMoJIHturAyGTY6Btn3domagGhcIJi6mGN!cQmGqR0wFV6kxy57UGjo5KcEelNAxYXOqxRbKOzOyzGuxfu!j!c_fscULl0oFo4TaoqmS2M93p3mA8twlgO0Mav07MDvFXIYvFt!q2bwH3!bwlk4RvszK0dQnF897PQ!I_bx2fquCwa_uWpTTprmgXO5Oz0ykWsyRFnp70fdl51Y6SqhCxm2SEGP4oz5!dnc2VJJXokoOI2ija4a8BDGstbN4AN35d90BXZYJOv!klH251wzWQsYftNqq3cqXLw--&_view=d"
    );
    // await page.goto(
    //   "https://gokce.van.sit1.vcilabs.com/s/Preview/4d677aae-4c12-42dd-9266-841d2a22ee75?_themeSelectionEnabled=true&_themeId=664171e1-fe4c-431c-8f79-ad280142c3de&_sup=mailto%3anoreply%40vccommunities.com&_userSpecifiedCulture=en&_locale=en-CA&_rid=DlEk0M_Va!lpDW3O7p9fnMoJIHturAyGTY6Btn3domagGhcIJi6mGN!cQmGqR0wFV6kxy57UGjo5KcEelNAxYXOqxRbKOzOyzGuxfu!j!c_fscULl0oFo4TaoqmS2M93p3mA8twlgO0Mav07MDvFXIYvFt!q2bwH3!bwlk4RvszK0dQnF897PQ!I_bx2fquCwa_uWpTTprmgXO5Oz0ykWsyRFnp70fdl51Y6SqhCxm2SEGP4oz5!dnc2VJJXokoOI2ija4a8BDGstbN4AN35d90BXZYJOv!klH251wzWQsYftNqq3cqXLw--&_view=d"
    // );
  });

  // afterAll(async () => {
  //   const [jsCoverage, cssCoverage] = await Promise.all([
  //     page.coverage.stopJSCoverage(),
  //     page.coverage.stopCSSCoverage(),
  //   ]);
  //   fs.writeFile("coverage.json", JSON.stringify(jsCoverage), () => {});
  // });

  it("should answer open ended question", async () => {
    const textAreaSelector = ".textanswer";
    await page.waitForSelector(textAreaSelector);
    const textArea = await page.$(textAreaSelector);
    let textAreaValue = await surveyPo.getInputValue(textArea);
    expect(textAreaValue).toEqual("");
    const nextButtonSelector = "#Next";
    await page.waitForSelector(nextButtonSelector);
    const nextButton = await page.$(nextButtonSelector);
    let nextButtonDisabled = await surveyPo.getButtonDisabled(nextButton);
    expect(nextButtonDisabled).toBeTruthy();
    await page.type(textAreaSelector, "Answer");
    textAreaValue = await surveyPo.getInputValue(textArea);
    expect(textAreaValue).toEqual("Answer");
    nextButtonDisabled = await surveyPo.getButtonDisabled(nextButton);
    expect(nextButtonDisabled).toBeFalsy();
    await page.click(nextButtonSelector);
  });

  it("should answer rank order question", async () => {
    const draggableSelector = ".row-draggable";
    await page.waitForSelector(draggableSelector);
    const draggables = await page.$$(draggableSelector);
    const droppableSelector = ".answer-box";
    await page.waitForSelector(droppableSelector);
    const droppables = await page.$$(droppableSelector);
    const nextButtonSelector = "#Next";
    await page.waitForSelector(nextButtonSelector);
    const nextButton = await page.$(nextButtonSelector);
    let nextButtonDisabled = await surveyPo.getButtonDisabled(nextButton);
    expect(nextButtonDisabled).toBeTruthy();
    for (const draggableIx in draggables) {
      const draggable = draggables[draggableIx];
      const droppable = droppables[draggableIx];
      const dragBox = await draggable.boundingBox();
      const dropBox = await droppable.boundingBox();
      await surveyPo.performDragDrop(dragBox, dropBox);
      await page.waitForTimeout(3000);
    }
    nextButtonDisabled = await surveyPo.getButtonDisabled(nextButton);
    expect(nextButtonDisabled).toBeFalsy();
    await page.click(nextButtonSelector);
  });
});
