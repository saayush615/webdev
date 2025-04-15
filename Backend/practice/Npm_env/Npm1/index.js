// Step 1: Load the .env file
require('dotenv').config();

// Step 2: Access the API key
const apiKey = process.env.API_KEY;

// Step 3: Use the API key in your code
console.log('Your API Key is:', apiKey);


// .env File:

// 1. This file stores your environment variables in the format KEY=VALUE.

// 2. Never commit the .env file to version control (e.g., Git). Add it to your .gitignore file to keep it private.