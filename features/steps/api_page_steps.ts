import { Given, Then, When, After } from '@cucumber/cucumber';
import { ApiPage } from '../../src/pages/ApiPage';
import { expect } from '@playwright/test';
import { Browser, BrowserContext, Page, chromium } from 'playwright';

let browser: Browser;
let context: BrowserContext;
let page: Page;
let api: ApiPage;

Given('I navigate to the API page', async () => {
  browser = await chromium.launch();
  context = await browser.newContext();
  page = await context.newPage();
  api = new ApiPage(page);
  await api.gotoApi();
});

Then('I should see the nav bar', async () => {
  await expect(api.navBar).toBeVisible();
});

Then(
  'the hash link next to chromium header under Properties should not be visible',
  async () => {
    await expect(api.chromiumHashLink).not.toBeVisible();
  }
);

When(
  'I hover over the chromium header under Properties',
  async () => {
    await api.chromiumHeader.hover();
  }
);

Then(
  'the hash link next to chromium header under Properties should be visible',
  async () => {
    await expect(api.chromiumHashLink).toBeVisible();
  }
);

After(async () => {
  await page?.close();
  await context?.close();
  await browser?.close();
});
