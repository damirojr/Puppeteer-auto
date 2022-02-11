const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
 // const var1 = 'dolar';
  //const var2 = 'real';
  const paginaAdress = `https://github.com/damirojr/Puppeteer-auto`

  await page.goto(paginaAdress);
  await page.screenshot({ path: 'teste.jpg'});
  
  await browser.close();
})();