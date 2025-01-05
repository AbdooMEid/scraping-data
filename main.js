const axios = require("axios");
const fs = require("node:fs");
const cheerio = require("cheerio");

const baseURL = "https://www.theparking-cars.com/used-cars/mercedes.html";

const fetchPageData = async (page) => {
  try {
    const url = `${baseURL}?page=${page}`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const cars = [];

    //** Scrape cars data from the page
    $(".right-bloc-detail").each((index, element) => {
      const title = $(element).find(".title-block").text().trim();
      let price = $(element).find(".prix").text().trim();
      const location = $(element).find(".upper").text().trim();
      const description = $(element).find(".desc").text().trim();
      const localTime = $(element).find(".btn-publication").text().trim();

      if (title && price && location && description && localTime) {
        price = price.split(" ");
        price = price[0];
        cars.push({
          title,
          price,
          location,
          description,
          localTime,
        });
      }
    });

    return cars;
  } catch (error) {
    console.error(`Error fetching page ${page}:`, error.message);
    return [];
  }
};

const scraping = async () => {
  const allCars = { cars: [] };

  for (let page = 1; page <= 2; page++) {
    console.log(`Fetching data from page ${page}...`);
    const cars = await fetchPageData(page);
    allCars.cars.push(...cars);
  }
  //** saving data to file carsData.json
  fs.writeFileSync("carsData.json", JSON.stringify(allCars, null, 2));
  console.log("Data saved to carsData.json");
};

scraping();
