import ClassRoom from "./0-classroom";

/**
 * initializes room
 */

export default function initializeRooms() {
  /**
   * initializes room
   * @returns a list of room
   */
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
