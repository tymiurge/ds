/**
 * <summary>
 * A stack is an ordered collection of items that follows
 * the last in, first out (LIFO) principle. That is the 
 * addition of new items or the removal of existing items
 * takes place at the same end. 
 * </summary>
 * 
 * <card>
 * the end of the stack is known as the top.
 * </card>
 * 
 * <card>
 * the opposite side of the top is known as the base.
 * </card>
 * 
 * <examples>
 *  - pile of books
 *  - stack of trays in a cafeteria
 * </examples>
 */
class Stack {
  /**
   * adds a new element (or several elements) to the top
   * of the stack.
   * @param {any} elements 
   */
  push(elements) {}

  /**
   * removes the top element from the stack. it also
   * returns the removed element.
   */
  pop() {}

  /**
   * returns the top element from the stack. The stack
   * is not modified.
   */
  peek() {}

  /**
   * returns true is the stack does not contain any elements, 
   * and false if the size of the stack is bigger than 0.
   */
  isEmpty() {}

  /**
   * removes all the elements of the stack
   */
  clear() {}

  /**
   * returns the number of elements that the stack contains. 
   */
  size() {}
}