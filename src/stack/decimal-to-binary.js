const decimalToBinary = decimal => {
  const remStack = new Stack();

  let dividingNumber = decimal;
  while( dividingNumber > 0) {
    const rem = Match.floor(dividingNumber % 2);
    remStack.push(rem);
    dividingNumber = Math.floor(dividingNumber / 2);
  }

  let binaryString = '';
  while(!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}