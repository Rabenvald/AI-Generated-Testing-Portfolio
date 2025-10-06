import { BasePage } from './BasePage';
import { Locator, Page } from 'playwright';

export class HomePage extends BasePage {
  footer: Locator;

  constructor(page: Page) {
    super(page);
    this.footer = page.locator('footer');
  }

  footerLink(text: string): Locator {
    return this.footer.locator('a', { hasText: text });
  }

  async gotoHome() {
    await this.goto('https://playwright.dev/');
  }
}
