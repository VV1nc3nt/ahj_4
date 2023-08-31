import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('loading form on start', async () => {
    await page.goto(baseUrl);

    await page.waitForSelector('.form');
  });

  test('test if form invalid', async () => {
    await page.goto(baseUrl);

    await page.waitForSelector('.form');

    const input = await page.$('.input_field');
    const submit = await page.$('.input_submit');

    await input.type('1234');
    await submit.click();

    await page.waitForSelector('.invalid');
  });

  test('test if form valid', async () => {
    await page.goto(baseUrl);

    await page.waitForSelector('.form');

    const input = await page.$('.input_field');
    const submit = await page.$('.input_submit');

    await input.type('3589934582830371');
    await submit.click();

    await page.waitForSelector('.valid');
  });
});
