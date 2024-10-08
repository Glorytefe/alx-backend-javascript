const http = require('http');
const fs = require('fs');

// Server configuration
const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

// Function to count students (from 3-read_file_async.js)
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  // Check if the database file path is provided
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }

  // Read the CSV file asynchronously
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const reportParts = [];
      const fileLines = data.trim().split('\n').filter((line) => line);

      // Process the CSV file if it has data
      if (fileLines.length > 1) {
        const studentGroups = {};
        const headers = fileLines[0].split(',');
        const fieldIndex = headers.length - 1;

        // Process each student record
        fileLines.slice(1).forEach((line) => {
          const studentData = line.split(',');
          if (studentData.length === headers.length) {
            const field = studentData[fieldIndex];
            const firstName = studentData[0];

            if (!studentGroups[field]) {
              studentGroups[field] = [];
            }
            studentGroups[field].push(firstName);
          }
        });

        // Generate report
        const totalStudents = Object.values(studentGroups).flat().length;
        reportParts.push(`Number of students: ${totalStudents}`);
        for (const [field, students] of Object.entries(studentGroups)) {
          reportParts.push(
            `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`,
          );
        }
      }
      resolve(reportParts.join('\n'));
    }
  });
});

// Route handlers
const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler: (_, res) => {
      const responseText = 'Hello Holberton School!';
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.end(responseText);
    },
  },
  {
    route: '/students',
    handler: (_, res) => {
      const responseParts = ['This is the list of our students'];
      countStudents(DB_FILE)
        .then((report) => {
          responseParts.push(report);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.statusCode = 200;
          res.end(responseText);
        })
        .catch((err) => {
          responseParts.push(err.message);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.statusCode = 200;
          res.end(responseText);
        });
    },
  },
];

// Handle HTTP requests
app.on('request', (req, res) => {
  const handler = SERVER_ROUTE_HANDLERS.find((r) => r.route === req.url);
  if (handler) {
    handler.handler(req, res);
  } else {
    // Handle unknown routes
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Start the server
app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = app;
