const fs = require('fs');

const countStudents = (dataPath) => {
  // Check if the file exists and is accessible
  if (!fs.existsSync(dataPath) || !fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  // Read and process the file synchronously
  try {
    const fileContent = fs.readFileSync(dataPath, 'utf-8').trim();
    const lines = fileContent.split('\n').filter((line) => line); // Filter out any empty lines

    // Ensure the file has more than just the header
    if (lines.length <= 1) {
      throw new Error('No valid data in the file');
    }

    const studentGroups = {};
    const header = lines[0].split(','); // Header (column names)
    const fieldsIdx = header.length - 1; // The index of the field (last column)

    // Process each student record
    for (const line of lines.slice(1)) {
      const studentData = line.split(',');

      // checks that lines  have the correct number of columns
      if (studentData.length === header.length) {
        const field = studentData[fieldsIdx]; // Get the student's field
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
        console.log(
          `Number of students in ${field}: ${
            students.length
          }. List: ${students.join(', ')}`,
        );
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
