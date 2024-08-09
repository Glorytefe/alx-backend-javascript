/**
 * Implement a class named HolbertonCourse
 */
export default class HolbertonCourse {
  /**
   * @param name (string)
   * @param length (Number)
   * @param students (array of Strings)
   */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * returns the value of name
   */
  get name() {
    return this._name;
  }

  /**
   * @param value
   * sets the value of name
   */
  set name(value) {
    if (typeof value === "string") {
      this._name = value;
    } else {
      throw new Error("TypeError: Name must be a string");
    }
  }

  /**
   * returns the value of students
   */
  get length() {
    return this.length;
  }

  /**
   * @param value
   * sets the value of length
   */
  set length(value) {
    if (typeof value === "number") {
      this._length = value;
    } else {
      throw new Error("TypeError: Length must be a number");
    }
  }

  get students() {
    /**
     * returns the value of students
     */
    return this.students;
  }

  /**
   * @param value
   * sets the value of students
   */
  set students(value) {
    if (
      Array.isArray(value) &&
      value.every((student) => typeof student === "string")
    ) {
      this._students = value;
    } else {
      throw new Error("Students must be an array of strings");
    }
  }
}
