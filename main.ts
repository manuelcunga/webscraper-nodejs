const puppeteer = require('puppeteer');
(async () => {
    // Inicializar o navegador
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Acessar a página de laptops
    await page.goto('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops');

    // Selecionar todos os laptops Lenovo
    const lenovoLaptops = await page.evaluate(() => {
        const laptops = Array.from(document.querySelectorAll('.thumbnail'));
        return laptops
            .filter(laptop => laptop.querySelector('.title').innerText.includes('Lenovo'))
            .map(laptop => {
                const title = laptop.querySelector('.title').innerText;
                const price = laptop.querySelector('.price').innerText;
                const image = laptop.querySelector('img').src;
                return { title, price, image };
            });
    });

    // Ordena os laptops do mais barato para o mais caro
    lenovoLaptops.sort((a, b) => a.price - b.price);

    // Exibe os dados dos laptops
    console.log(lenovoLaptops);

    // Fecha o navegador
    await browser.close();
})();
