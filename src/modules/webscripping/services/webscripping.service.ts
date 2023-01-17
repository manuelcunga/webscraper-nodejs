import * as puppeteer from 'puppeteer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WebScripperService {
  constructor() {
    this.scripping();
  }

  async scripping() {
    const browser: any = await puppeteer.launch();
    const page: any = await browser.newPage();

    await page.goto(
      'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops',
    );

    const lenovoLaptops: any[] = await page.evaluate(() => {
      const laptops: any[] = Array.from(
        document.querySelectorAll('.thumbnail'),
      );
      return laptops
        .filter((laptop: any) =>
          laptop.querySelector('.title').innerText.includes('Lenovo'),
        )
        .map((laptop: any) => {
          const title: string = laptop.querySelector('.title').innerText;
          const price: string = laptop.querySelector('.price').innerText;
          const image: string = laptop.querySelector('img').src;
          return { title, price, image };
        });
    });

    lenovoLaptops.sort((a: any, b: any) => a.price - b.price);
    await browser.close();
    console.log('Teste da class vindo', lenovoLaptops);
  }
}
