// #24
// Implement a stack that supports the following operations,
// all in O(1) time:
// - push(val)   → push a value onto the stack
// - pop()       → remove and return the top value
// - getMin()    → return the minimum value in the stack
//
// Constraints: you may not use any built-in sort or min functions.
// getMin() must run in O(1) — not O(n).
//

class MinStack {
  constructor() {
    this.stack = [];
    // minStack always tracks the current minimum at each state
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    // push to minStack if it's empty or val is <= current min
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  }

  pop() {
    const val = this.stack.pop();
    // if the popped value was the current min, remove it from minStack too
    if (val === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return val;
  }

  getMin() {
    // top of minStack is always the current minimum
    return this.minStack[this.minStack.length - 1];
  }
}