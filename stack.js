class Stack {
  constructor(length = 10) {
    if (typeof length === 'number' && !isNaN(length)) {
      this.maxLength = length;
    } else {
      throw new Error(`Length is not a number`)
    }
    this.size = 0;
    this.storage = []
  }

  push(elem) {
    const size = this.size;
    if (size < this.maxLength) {
      this.storage[size] = elem;
      this.size++;
    } else {
      throw new Error(`Stack length is more than ${this.maxLength}`)
    }
  }
  pop() {
    const size = this.size - 1;

    if (size >= 0) {
      const data = this.storage[size];
      this.storage.splice(size, 1)
      this.size--;
      return data;
    } else {
      throw new Error(`Stack is empty`)
    }
  }
  peek() {
    const size = this.size - 1;

    if (size >= 0) {
      const data = this.storage[size];
      return data;
    } else {
      throw new Error(`Stack is empty`)
    }
  }
  isEmpty() {
    return !this.size;
  }
  toArray() {
    const copyArr = [];

    while (this.size - 1 >= 0) {
      let item = this.pop();
      if (item === null) {
        copyArr.push(null);
      } else if (Array.isArray(item)) {
        copyArr.push([...item]);
      } else if (typeof item === 'object') {
        copyArr.push({ ...item });
      } else {
        copyArr.push(item);
      }
    }
    return copyArr.reverse();
  }

  // error
  static fromIterable(iterable) {
    if (Symbol.iterator in Object(iterable)) {
      this.size = iterable.length;
      this.storage = [...iterable]
      return new Stack(iterable.length);
    } else {
      throw new Error(`Data is not iterable`);
    }
  }
}