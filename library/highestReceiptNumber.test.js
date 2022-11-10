import "@testing-library/jest-dom";
import {highestReceiptNumber} from "../library/highestReceiptNumber";

test("Function to find the highest receiptNumber in an array of Objects", async () => {
  const array = [
    { id: 1, receiptNumber: 1 },
    { id: 2, receiptNumber: 2 },
  ];

  const result = highestReceiptNumber(array);
  expect(result).toStrictEqual(2);
});



test("See if function works for an empty array", async () => {
  const array = [];

  const result = highestReceiptNumber(array);
  expect(result).toStrictEqual(0);
});


test("See if function works for unsorted arrays", async () => {
  const array = [
    { id: 1, receiptNumber: 1 },
    { id: 2, receiptNumber: 25 },
    { id: 3, receiptNumber: 166 },
    { id: 4, receiptNumber: 2222222 },
    { id: 5, receiptNumber: 11 },
    { id: 6, receiptNumber: 28 },
    { id: 7, receiptNumber: 17 },
    { id: 8, receiptNumber: 2 },
    
  ];

  const result = highestReceiptNumber(array);
  expect(result).toStrictEqual(2222222);
});
