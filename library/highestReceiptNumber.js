//Takes an Array and returns the highest receiptNumber of it

export function highestReceiptNumber(data) {
  const receiptNumberArray = data.map((e) => +e.receiptNumber);
  const highestReceiptNumber = Math.max(...receiptNumberArray);
  return highestReceiptNumber;
}
