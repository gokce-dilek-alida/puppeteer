import surveyPo from "../pages/modern-survey.po";

describe("openend functional tests", () => {
  beforeAll(async () => {
    await surveyPo.openPage(
      "https://standalonesurveys.na2.vcsandbox.com/s/Respond/9c2999c9-8688-428c-8df8-8c81e1cbe79f?_view=d&_rv=2&_preview=0"
    );
  });

  it("should answer openend question", async () => {
    try {
      const inputSelector = ".alida-survey-responding-ui73";
      await page.waitForSelector(inputSelector);
      await page.type(inputSelector, "answer");
      surveyPo.gotoNextPage();
      await page.evaluate((_) => {},
      `browserstack_executor: ${JSON.stringify({ action: "setSessionStatus", arguments: { status: "passed", reason: "Test assertion passed" } })}`);
    } catch (err) {
      console.error("error: ", err);
      await page.evaluate((_) => {},
      `browserstack_executor: ${JSON.stringify({ action: "setSessionStatus", arguments: { status: "failed", reason: "Test assertion failed" } })}`);
    }
  });
});
