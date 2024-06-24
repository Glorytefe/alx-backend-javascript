export default function createIteratorObject(report) {
  const result = [];
  Object.values(report).forEach((department) => {
    for (const key in department) {
      if (key) {
        result.push(...department[key]);
      }
    }
  });

  return result;
}
