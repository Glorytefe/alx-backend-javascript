export default class Airport {
  /**
   * @param {String} code
   * @param {String} name
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new Error('name must be string');
    }
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw new Error('code must be string');
    }
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
