const axios = require('axios');
const cheerio = require('cheerio');

const BASE_URL = 'https://www.bag.work';
const MAX_DEPTH = 1;

const visitedUrls = new Set(); // Set to store visited URLs

module.exports =  async function scrape(url, depth = 0) {
  try {
    if (visitedUrls.has(url)) {
      return; // Skip scraping if the URL has already been visited
    }
    visitedUrls.add(url); // Mark the URL as visited

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const text = $('body')
      .clone()
      .children()
      .remove('script,noscript,style,footer')
      .end()
      .text()
      .trim();

    console.log(text);

    if (depth < MAX_DEPTH) {
      const links = $('a');
      for (let i = 0; i < links.length; i++) {
        const link = $(links[i]);
        const href = link.attr('href');
        if (href && href.startsWith('http')) {
          await scrape(href, depth + 1);
        }
      }
    }
  } catch (error) {
    console.error(`Error scraping ${url}: ${error.message}`);
  }
}

scrape(BASE_URL);
