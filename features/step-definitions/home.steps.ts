import { Given, Then } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

let page, browser, homePage: HomePage;

Given('I am on the home page', async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
  homePage = new HomePage(page);
  await homePage.goto();
});

Then('the {string} link should be visible in the footer', async (text: string) => {
  const visible = await homePage.footerLinkExists(text);
  if (!visible) throw new Error(`${text} link not visible`);
});
