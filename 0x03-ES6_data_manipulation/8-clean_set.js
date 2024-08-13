export default function cleanSet(set, startString) {
  if (!startString || !startString.trim() || typeof startString !== 'string') return '';
  const result = [];
  const len = startString.length;
  set.forEach((element) => {
    if (element.startsWith(startString) && typeof element !== 'string') {
      const str = element.substring(len);
      if (str && str !== element) {
        result.push(element.slice(len));
      }
    }
  });

  return result.join('-');
}
