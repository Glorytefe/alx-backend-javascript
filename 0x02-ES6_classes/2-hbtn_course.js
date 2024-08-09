/**
 * Implement a class named HolbertonCourse
 */
export default class HolbertonCourse {
  /**
   * @param {String} name
   * @param {Number} length
   * @param {String[]} students
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * returns the value of name
   */
  get name() {
    return this._name;
  }

  /**
   * sets the value of name
   */
  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  /**
   * returns the value of students
   */
  get length() {
    return this._length;
  }

  /**
   * sets the value of length
   */
  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    /**
     * returns the value of students
     */
    return this._students;
  }

  /**
   * sets the value of students
   */
  set students(value) {
    if (
      value instanceof Array
      && value.every((student) => typeof student === 'string')
    ) {
      this._students = value;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
