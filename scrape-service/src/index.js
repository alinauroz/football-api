const puppeteer = require('puppeteer');

(async () => {
    let url = "https://www.footballpakistan.com/";
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    console.log("loaded ..");
    let data = await page.evaluate(() => {
        let images = document.querySelectorAll('.wp-post-image');
        let headings = document.querySelectorAll(".cmsmasters_post_title");
        let summary = document.querySelectorAll(".cmsmasters_post_content");
    });
    console.log(">>>", data);
})();