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

  chromiumAnchor() {
    return this.page.locator('h3#playwright-chromium');
  }

  async chromiumHashLinkVisible() {
    const isVisibleNow = await this.page.evaluate(() => {
      const el = document.querySelector('h3#playwright-chromium a.hash-link');
      if (!el) return false;
      const style = window.getComputedStyle(el);
      return parseFloat(style.opacity) > 0;
    });
    return isVisibleNow;
  }

  async hoverChromiumHeader() {
    await this.chromiumAnchor().hover();
  }

}
