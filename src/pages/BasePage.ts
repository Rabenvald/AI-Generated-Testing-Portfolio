import { Page } from 'playwright';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async getFooterLinkByText(text: string) {
    // assumes link text is visible in footer
    return this.page.locator('footer a', { hasText: text });
  }
}
