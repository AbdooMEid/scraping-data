# Web Scraping Task

This project is a solution for a web scraping task . The goal of this project is to extract structured data from a webpage and store it in a JSON file.

## Features
- Extracts data dynamically from a webpage.
- Filters and cleans the extracted data to exclude incomplete entries.
- Stores the final data in a well-formatted JSON file.
- Handles edge cases, such as duplicate values or missing information.

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Cheerio**: A lightweight library for parsing and manipulating HTML.
- **fs**: For file handling (saving data to JSON).

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   
2. Install dependencies:
  ```bash
   npm install
   ```
4. Run the scraper:
   ```bash
   node main.js