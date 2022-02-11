const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://github.com/damirojr');
  await page.screenshot({ path: 'example.png' });
  //await page.focus()
  await browser.close();
})();