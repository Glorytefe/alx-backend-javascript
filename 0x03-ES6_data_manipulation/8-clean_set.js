export default function cleanSet(set, startString) {
  if (!startString.trim()) return '';
  return Array.from(set)
    .filter((item) => item.startsWith(startString))
    .map((item) => item.replace(startString, ''))
    .join('-');
}
