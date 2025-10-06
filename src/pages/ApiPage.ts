import { Locator, Page } from 'playwright';
import { BasePage } from './BasePage';

export class ApiPage extends BasePage {
  navBar: Locator;
  chromiumHeader: Locator;
  chromiumHashLink: Locator;

  constructor(page: Page) {
    super(page);
    // Observe the actual site — the navigation is under <nav> with some class etc.
    this.navBar = page.locator('nav'); 

    // Inspecting the Playwright API docs page, the “Properties” section is in a section
    // with id "properties", and inside there is an h3 for “chromium”
    this.chromiumHeader = page.locator('#properties h3[id="chromium"]');

    // The hash link is the little anchor icon next to the header text
    // It’s typically an <a> with class “hash-link”
    this.chromiumHashLink = this.chromiumHeader.locator('a.hash-link');
  }

  async gotoApi() {
    await this.goto('https://playwright.dev/docs/api');
    await this.page.waitForLoadState('networkidle'); 
  }
}
