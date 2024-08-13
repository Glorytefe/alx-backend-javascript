export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students) || !city) return [];
  return students.filter((student) => student.location.toLowerCase().includes(city.toLowerCase()));
}
