// js/customArray.js

class MyArray {
  constructor() {
    this.length = 0;
  }

  // Push: Add element at the end
  push(value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  }

  // Pop: Remove last element
  pop() {
    if (this.length === 0) return undefined;
    const removed = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return removed;
  }

  // forEach: Loop through each element
  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }

  // map: Create new array with transformed values
  map(callback) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  }

  // filter: Return new array with matching values
  filter(callback) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  }

  // reduce: Accumulate values
  reduce(callback, initialValue) {
    let acc = initialValue !== undefined ? initialValue : this[0];
    let start = initialValue !== undefined ? 0 : 1;

    for (let i = start; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }
    return acc;
  }
}


