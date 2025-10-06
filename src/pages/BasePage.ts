import { Page, Locator } from 'playwright';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  footerLinkLocator(text: string): Locator {
    // Generic: find in footer a link with this text
    return this.page.locator('footer a', { hasText: text });
  }
}
