import { Page } from '@playwright/test';

export class ApiPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://playwright.dev/docs/api/class-playwright');
  }

  async navBarExists() {
    return this.page.locator('nav').isVisible();
  }

  async isChromiumHashVisible() {
    return this.page.locator('text=chromium >> xpath=.. >> .anchor').isVisible();
  }

  async hoverChromiumHeader() {
    await this.page.locator('text=chromium').hover();
  }
}
