export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location.toLowerCase().includes(city.toLowerCase()))
    .map((student) => {
      const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: studentGrade.grade ? studentGrade.grade : 'N/A',
      };
    });
}
