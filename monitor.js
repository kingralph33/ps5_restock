const puppeteer = require('puppeteer');
const CronJob = require('cron').CronJob;
const nodemailer = require('nodemailer');
const $ = require('cheerio');

const ps5_BestBuyUrl = "https://www.bestbuy.com/site/playstation-5/playstation-5-packages/pcmcat1588107358954.c?id=pcmcat1588107358954";
const rand_url = "https://www.bestbuy.com/site/marvels-spider-man-game-of-the-year-edition-playstation-4-playstation-5/6363873.p?skuId=6363873";

