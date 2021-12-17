import { ElementHandle } from "puppeteer";

class ModernSurvey {
  async openPage(url: string) {
    await page.goto(url);
    await page.waitForSelector("#headerImage");
  }

  async gotoNextPage() {
    const nextButtonSelector = "#Next";
    await page.waitForSelector(nextButtonSelector);
    const nextButton = await page.$(nextButtonSelector);
    await nextButton.click();
  }
}

export default new ModernSurvey();
