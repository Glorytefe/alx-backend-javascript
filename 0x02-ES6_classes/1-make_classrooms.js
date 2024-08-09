import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const createRoom = (num) => new ClassRoom(num);
  return [createRoom(19), createRoom(20), createRoom(24)];
}
