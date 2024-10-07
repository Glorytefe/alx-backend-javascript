import { readDatabase } from '../utils.js';

class StudentsController {
  static getAllStudents(req, res) {
    const dbFile = process.argv[2];
    readDatabase(dbFile)
      .then((students) => {
        let responseText = 'This is the list of our students\n';
        Object.keys(students)
          .sort()
          .forEach((field) => {
            responseText += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
          });
        res.status(200).send(responseText.trim());
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      const dbFile = process.argv[2];
      readDatabase(dbFile)
        .then((students) => {
          const studentsInMajor = students[major] || [];
          res.status(200).send(`List: ${studentsInMajor.join(', ')}`);
        })
        .catch(() => res.status(500).send('Cannot load the database'));
    }
  }
}

export default StudentsController;
