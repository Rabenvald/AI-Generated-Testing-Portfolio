import { Given, Then, After } from '@cucumber/cucumber';
import { HomePage } from '../../src/pages/HomePage';
import { expect } from '@playwright/test';
import { Browser, BrowserContext, Page, chromium } from 'playwright';

let browser: Browser;
let context: BrowserContext;
let page: Page;
let home: HomePage;

Given('I am on the Home page', async () => {
  browser = await chromium.launch();
  context = await browser.newContext();
  page = await context.newPage();
  home = new HomePage(page);
  await home.gotoHome();
});

Then('I should see a footer link {string}', async (linkText: string) => {
  const link = home.footerLink(linkText);
  await expect(link).toBeVisible();
});

After(async () => {
  await page?.close();
  await context?.close();
  await browser?.close();
});
