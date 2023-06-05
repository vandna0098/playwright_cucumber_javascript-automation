/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-console */
const {
  After,
  AfterAll,
  Before,
  BeforeAll,
  HookScenarioResult,
  setDefaultTimeout,
} = require('cucumber');
const { cast, PlaywrightFluent } = require('playwright-fluent');
const { Page } = require('playwright');


setDefaultTimeout(3000000);

BeforeAll(async () => {
});

Before(async function () {
  this.appUrl = "https://www.testyou.in/index.aspx";
  console.log(`APP URL: ${this.appUrl}`);
  this.attach(`APP URL: ${this.appUrl}`);

  const browser = process.env.BROWSER || 'chrome';
  console.log(`Browser: ${browser}`);
  this.attach(`Browser: ${browser}`);
  this.attach(`Selected Browser: ${browser}`);
  const args = browser !== 'webkit' ? ['--start-maximized'] : [];
  this.p = new PlaywrightFluent()
    .withBrowser(browser)
    .recordPageErrors()
    .recordFailedRequests()
    .withOptions({ headless: false, args: args });

  this.objPage = cast(this.p).currentPage();
});

/**
 * After each scenario hook
 * Will be executed last => After methods execute in reverse order
 */
After(async function (testCase) {
  testCase.pickle.name

  const screenshot = await cast(this.p).currentPage()?.screenshot({ fullPage: true });
  if (screenshot != null || screenshot != undefined) {
    this.attach(screenshot, 'image/png');

    if (this.p) {
      await cast(this.p).close();
    }
  }

});

AfterAll(() => {

});
