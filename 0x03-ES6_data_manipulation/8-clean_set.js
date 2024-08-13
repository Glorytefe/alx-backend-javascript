export default function cleanSet(set, startString) {
  if (!startString.trim() || typeof startString !== 'string') return '';
  const result = [];
  const len = startString.length;
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      result.push(element.slice(len));
    }
  });

  return result.join('-');
}
