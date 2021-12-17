import surveyPo from "../pages/modern-survey.po";

describe("carousel functional tests", () => {
  beforeAll(async () => {
    await surveyPo.openPage(
      "https://standalonesurveys.na2.vcsandbox.com/s/Start/605abc1c-c9c7-402c-9ec3-e628ba066b7c?_rid=DlEk0M_Va!mMj02!4BMIh4xYarm4DlpY08YUnidoKelDZ2oiuyJGhRdfVgBsQ0hdjw7RMrAHFbSDLc0vAho3m8BQozN7Kslr3DluRvXUk6C_Oa45YyToJwysccO_aloUkUC2DpdBkJhKZPnwI24eNwck_R0VeZPwY3NSlJ0ToMDfvA6fpn7_BqkQJeYJhwXqX3Q!qaeiyJcDazve9a!lTQKPbfEJPZqLm0cJup5Fyuo7Kg0lTEMv04YymadExItG1zbL0GIuCB9hAs3BBa4YSaFEY4reXIBsUzGr3WCBtdUx6jPowTEsedkfZNDAovYa2JdhBQ4Qya03x00K48KTpeR6bBWV39eM&_mult=False&_themeId=ded75147-08ee-49d3-b9d4-ab7a015b12d1&_data=yEbdlvcb!wQu1Yl2AxquKyUoq41w4!f5o1S3F7_tj40HjDPS8_zC88LzeLWd28t1Bq_WMovVkmuq4G1HmVHB2on82kgiqVgQAN36A4y2etk1j9S07jzZ8IqS!8X8vyyS5P1RLxYLTbq!_znjj!uTZbexp8O74hRjL2myKnw2OG_KE2X9ZLpTYEZjd4O0dcI3UxN16AMMQCqFZjnB!lwGLOwSSumiFIvBXLIdfPhLHrzx8TnWVQSnZuFSLpIhX51pVT8av0GVidayDt2sKIgHKC6G1DGkZ6cKMDglwEUPl1oQ5LjyyFteNw--&_sup=https%3a%2f%2fwww.nytimes.com&_dspvw=d"
    );
  });

  it("should not move to next page if answers are not valid", async () => {
    try {
      const startButtonSelector = "button.alida-survey-responding-ui98";
      await page.waitForSelector(startButtonSelector);
      await page.click(startButtonSelector);
      const answerSelector = 'span[role="button"]';
      await page.waitForSelector(answerSelector);
      const answers = await page.$$(answerSelector);
      expect(answers.length).toEqual(3);
      await answers[0].click();
      const closeButtonSelector = 'div[aria-label="Close popup"]';
      await page.waitForSelector(closeButtonSelector);
      await page.click(closeButtonSelector);
      surveyPo.gotoNextPage();
      const requiredSelector = 'div[aria-label*="required"]';
      await page.waitForSelector(requiredSelector);
      const requiredWarning = await page.$(requiredSelector);
      expect(requiredWarning).toBeDefined();
      await page.evaluate((_) => {},
      `browserstack_executor: ${JSON.stringify({ action: "setSessionStatus", arguments: { status: "passed", reason: "Test assertion passed" } })}`);
    } catch (err) {
      console.error("error: ", err);
      await page.evaluate((_) => {},
      `browserstack_executor: ${JSON.stringify({ action: "setSessionStatus", arguments: { status: "failed", reason: "Test assertion failed" } })}`);
    }
  });

  it("should move to next page if answers are valid", async () => {
    try {
      const cardSelector = 'li[data-index="1"]';
      await page.waitForSelector(cardSelector);
      const secondCard = await page.$(cardSelector);
      await secondCard.click();
      const answerSelector = 'span[role="button"]';
      await page.waitForSelector(answerSelector);
      const answers = await page.$$(answerSelector);
      expect(answers.length).toEqual(3);
      await answers[0].click();
      const closeButtonSelector = 'div[aria-label="Close popup"]';
      await page.waitForSelector(closeButtonSelector);
      await page.click(closeButtonSelector);
      surveyPo.gotoNextPage();
      const carouselSelector =
        ".react-multi-carousel-list.alida-survey-responding-ui99";
      await page.waitForSelector(carouselSelector);
      const carouselContainer = await page.$(carouselSelector);
      expect(carouselContainer).not.toBeDefined();
      await page.evaluate((_) => {},
      `browserstack_executor: ${JSON.stringify({ action: "setSessionStatus", arguments: { status: "passed", reason: "Test assertion passed" } })}`);
    } catch (err) {
      console.error("error: ", err);
      await page.evaluate((_) => {},
      `browserstack_executor: ${JSON.stringify({ action: "setSessionStatus", arguments: { status: "failed", reason: "Test assertion failed" } })}`);
    }
  });
});
