import { ElementHandle } from "puppeteer";

class Survey {
  async navigate(url: string) {
    await page.goto(url);
  }

  async getInputValue(element: ElementHandle<Element> | null) {
    return await page.evaluate((input) => input.value, element);
  }

  async getButtonDisabled(element: ElementHandle<Element> | null) {
    return await page.evaluate((button) => button.disabled, element);
  }

  async performDragDrop(
    dragBox: { x: number; y: number },
    dropBox: { x: number; y: number }
  ) {
    await page.mouse.move(dragBox.x, dragBox.y);
    await page.mouse.down();
    await page.mouse.move(dropBox.x, dropBox.y);
    await page.mouse.up();
  }
}

export default new Survey();
