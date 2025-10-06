import { Page } from '@playwright/test';

export class ApiPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://playwright.dev/docs/api/class-playwright');
  }

  async leftSidebarExists() {
    const sidebar = this.page.getByRole('navigation', { name: 'Docs sidebar' });
    return sidebar.isVisible();
  }

  async chromiumAnchor() {
    return this.page.locator('h3#playwright-chromium');
  }

  async chromiumHashLinkVisible() {
    return this.chromiumAnchor().locator('.anchor').isVisible();
  }

  async hoverChromiumHeader() {
    await this.chromiumAnchor().hover();
  }

}
