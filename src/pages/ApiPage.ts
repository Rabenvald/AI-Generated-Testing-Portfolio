import { BasePage } from './BasePage';
import { Locator, Page } from 'playwright';

export class ApiPage extends BasePage {
  navBar: Locator;
  // locator for “chromium” header under “Properties”
  chromiumHeader: Locator;
  chromiumHashLink: Locator;

  constructor(page: Page) {
    super(page);
    this.navBar = page.locator('nav');  // adjust selector to actual nav bar
    // We need a precise locator for the “chromium” header under “Properties”
    // Suppose HTML structure is something like <h3 id="chromium">Chromium <a class="hash-link" .../></h3>
    this.chromiumHeader = page.locator('section#properties h3[id="chromium"]');
    this.chromiumHashLink = this.chromiumHeader.locator('a.hash-link');
  }

  async gotoApi() {
    await this.goto('https://playwright.dev/docs/api');
  }
}
