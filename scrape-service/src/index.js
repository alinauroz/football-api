const puppeteer = require('puppeteer');
const removeExisting = require('./removeExisting');
const saveToLogs = require('./saveToLogs');
const postNews = require('./postNews');

(async () => {
    let url = "https://www.footballpakistan.com/";
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    console.log("loaded ..");
    let data = await page.evaluate(() => {
        let images = document.querySelectorAll('.wp-post-image');
        let headings = document.querySelectorAll(".cmsmasters_post_title > a");
        let summary = document.querySelectorAll(".cmsmasters_post_content > p");

        let imagesLinks = [], headingsBody = [], urls = [], summaryContent = [];

        for (let i = 0; i < images.length; i++) {
            imagesLinks.push(images[i].src);
            headingsBody.push(headings[i].innerHTML);
            summaryContent.push(summary[i].innerHTML);
            urls.push(headings[i].href);
        };

        return {
            imagesLinks,
            headingsBody,
            urls,
            summaryContent,
        }

    });
})();