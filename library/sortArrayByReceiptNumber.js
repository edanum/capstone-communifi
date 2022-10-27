export function sortArrayByReceiptNumber(array, direction) {
  if (direction === "ascending") {
    const sortedArray = array.sort((a, b) => a.receiptNumber - b.receiptNumber);
    return sortedArray;
  } else {
    const sortedArray = array.sort((a, b) => b.receiptNumber - a.receiptNumber);
    return sortedArray;
  }
}
