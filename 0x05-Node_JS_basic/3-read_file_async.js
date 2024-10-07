const fs = require('fs');

const countStudents = (dataPath) => {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(dataPath, 'utf-8', (err, data) => {
      if (err) {
        // Reject if the file cannot be read
        reject(new Error('Cannot load the database'));
        return;
      }

      // Process the file data if available
      if (data) {
        const fileLines = data.trim().split('\n').filter((line) => line); // Filter out any empty lines

        // Ensure the file has more than just the header
        if (fileLines.length <= 1) {
          reject(new Error('No valid data in the file'));
          return;
        }

        const studentGroups = {};
        const header = fileLines[0].split(','); // The header (column names)
        const fieldIdx = header.length - 1; // The index of the field (last column)

        // Process each student record
        for (const line of fileLines.slice(1)) {
          const studentData = line.split(',');

          // Skip lines that don't match the column count
          if (studentData.length !== header.length) continue;

          const field = studentData[fieldIdx]; // Get the student's field
          const firstName = studentData[0]; // Assuming the first column is the first name

          // Initialize the field group if it doesn't exist
          if (!studentGroups[field]) {
            studentGroups[field] = [];
          }
          studentGroups[field].push(firstName); // Add the student's first name to the group
        }

        // Output the total number of students
        const totalStudents = Object.values(studentGroups).flat().length;
        console.log(`Number of students: ${totalStudents}`);

        // Output the number of students per field and their names
        for (const [field, students] of Object.entries(studentGroups)) {
          console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }

        // Resolve the promise
        resolve(true);
      }
    });
  });
};

module.exports = countStudents;
