/**
 * converts decimal number to the bases between 2 and 36.
 * @see decimal-to-binary.js
 */
const baseConverter = (decimal, base) => {
  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const remStack = new Stack();
  let dividingNumber = decimal;
  while (dividingNumber > 0) {
    const rem = Match.floor(dividingNumber % base);
    remStack.push(rem);
    dividingNumber = Math.floor(dividingNumber / 2);
  }

  let result = '';
  while(!remStack.isEmpty()) {
    result += digits[remStack.pop()];
  }
  return result;
}
