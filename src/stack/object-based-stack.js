/**
 * 
 * for large set of data it is recommended to
 * construct object based stack, since the most
 * methods of js arrays have complexity of time O(n).
 * so the more elements have array (in array based stack)
 * the more time it takes to. 
 * also an array is an ordered set of the elements, and
 * to keep the elements in order it would need more
 * space in the memory as well (mostly becase array
 * implements at least Iterable interface).
 * 
 * so here object-based stack is represented.
 * 
 * @see src/stack/stack.js
 * @see src/stack/array-based-stack.js
 * 
 */
class Stack {

  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count = this.count + 1;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count = this.count - 1;
    const result = this.items[this.count];
    delete this.items[this.count];
    // or, with ES6
    // const { [this.count]: result, ...rest} = this.items;
    // this.items = rest;
    return result;
  }

  peek() {
    if (this.isEmpty) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty) {
      return '';
    }
    return this.items.join(',')
  }
}