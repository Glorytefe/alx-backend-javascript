const express = require('express');

// Create an instance of the express application
const app = express();
const PORT = 1245;

// Define the root route '/'
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

// Start the server and listen on port 1245
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

// Export the app
module.exports = app;
