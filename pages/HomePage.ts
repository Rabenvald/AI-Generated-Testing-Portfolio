import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async footerLinkExists(text: string) {
    return this.page.locator(`footer >> text=${text}`).isVisible();
  }
}
