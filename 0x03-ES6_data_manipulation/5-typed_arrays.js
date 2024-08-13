export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const bufferView = new Uint8Array(buffer);
  if (position > bufferView.length) throw new Error('Position outside range');
  bufferView[position] = value;
  return new DataView(buffer);
}
