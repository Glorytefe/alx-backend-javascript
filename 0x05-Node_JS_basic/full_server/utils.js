import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = {};
        const fileLines = data.trim().split('\n');
        const headers = fileLines[0].split(',');

        for (const line of fileLines.slice(1)) {
          const studentData = line.split(',');
          const field = studentData[headers.length - 1];
          const firstname = studentData[0];

          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname);
        }

        resolve(students);
      }
    });
  });
}
