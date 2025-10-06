import { Locator, Page } from 'playwright';
import { BasePage } from './BasePage';

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
    // optionally wait for something visible to know page loaded
    await this.page.waitForLoadState('networkidle');
  }
}
