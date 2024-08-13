export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const queries = weakMap.get(endpoint);
  if (queries) {
    if (queries >= 5) throw new Error('Endpoint load is high');
    weakMap.set(endpoint, queries + 1);
  } else {
    weakMap.set(endpoint, 0);
  }
}
