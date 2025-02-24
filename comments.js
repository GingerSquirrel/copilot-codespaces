// Create web server
// 1. Load the express module
// 2. Create an instance of express
// 3. Create a route to handle incoming requests
// 4. Start the server
// 5. Log the port number

// 1. Load the express module
const express = require('express');

// 2. Create an instance of express
const app = express();

// 3. Create a route to handle incoming requests
app.get('/', (req, res) => {
  res.send('Hello World');
});

// 4. Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

// 5. Log the port number