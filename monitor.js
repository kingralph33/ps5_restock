const puppeteer = require('puppeteer');
const CronJob = require('cron').CronJob;
const nodemailer = require('nodemailer');
const $ = require('cheerio');

const ps5_BestBuyUrl = "https://www.bestbuy.com/site/playstation-5/playstation-5-packages/pcmcat1588107358954.c?id=pcmcat1588107358954";
const rand_url = "https://www.bestbuy.com/site/marvels-spider-man-game-of-the-year-edition-playstation-4-playstation-5/6363873.p?skuId=6363873";

async function initBrowser(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(rand_url);
    return page;
}

async function checkStock(page){
    await page.reload();
    let content = await page.evaluate(() => document.body.innerHTML);
    $("link[itemprop='availability']", content).each(function(){
        let outOfStock = $(this).attr('href').toLowerCase().includes("outofstock");
        if(outOfStock){
            console.log("Out of Stock");
        } else {
            console.log("In Stock");
        }
    })
}

async function monitor(){
    let page = await initBrowser();
    await checkStock(page);
}

monitor();