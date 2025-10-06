import { Given, Then, When } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { ApiPage } from '../../pages/ApiPage';

let page, browser, apiPage: ApiPage;

Given('I am on the API page', async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
  apiPage = new ApiPage(page);
  await apiPage.goto();
});

Then('the nav bar should be visible', async () => {
  const visible = await apiPage.navBarExists();
  if (!visible) throw new Error('Nav bar not visible');
});

Then('the chromium hash link should not be visible', async () => {
  const visible = await apiPage.isChromiumHashVisible();
  if (visible) throw new Error('Hash link should not be visible');
});

When('I hover over the chromium header', async () => {
  await apiPage.hoverChromiumHeader();
});

Then('the chromium hash link should be visible', async () => {
  const visible = await apiPage.isChromiumHashVisible();
  if (!visible) throw new Error('Hash link should be visible');
});
