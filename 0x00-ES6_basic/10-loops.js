export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const value of array) {
    const formattedValue = appendString + value;
    result.push(formattedValue);
  }

  return result;
}
