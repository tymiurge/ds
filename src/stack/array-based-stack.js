/**
 * array based stack
 * @see src/stack/stack.js
 */
class Stack {

  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  // 
  //  all the rest methods
  //
  
}