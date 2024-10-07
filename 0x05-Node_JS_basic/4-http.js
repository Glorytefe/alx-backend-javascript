const http = require('http');

// Server configuration
const PORT = 1245;
const HOST = 'localhost';

// Create the HTTP server and handle incoming requests
const app = http.createServer((req, res) => {
  const responseText = 'Hello Holberton School!';

  // Set headers to serve plain text
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);

  // Set the status code to 200 (OK)
  res.statusCode = 200;

  // Send the response
  res.end(responseText);
});

// Start the server and listen on the specified port and host
app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

// Export the app for use in other files
module.exports = app;
