//Takes an Array and returns the highest receiptNumber of it

export function highestReceiptNumber(data) {
  if (data.length === 0) {
    return 0;
  } else {
    const receiptNumberArray = data.map((e) => +e.receiptNumber);
    const highestReceiptNumber = Math.max(...receiptNumberArray);
    return highestReceiptNumber;
  }
}
