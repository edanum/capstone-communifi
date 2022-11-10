import "@testing-library/jest-dom";
import { sortArrayByReceiptNumber } from "../library/sortArrayByReceiptNumber";

test("Sort array ascending", async () => {
  const array = [
    { id: 1, receiptNumber: 10 },
    { id: 2, receiptNumber: 2 },
    { id: 3, receiptNumber: 12 },
    { id: 4, receiptNumber: 3 },
    { id: 5, receiptNumber: 1 },
    { id: 6, receiptNumber: 32 },
    { id: 7, receiptNumber: 4 },
    { id: 8, receiptNumber: 5 },
  ];

  const result = sortArrayByReceiptNumber(array, "ascending");
  expect(result).toStrictEqual([
    { id: 5, receiptNumber: 1 },
    { id: 2, receiptNumber: 2 },
    { id: 4, receiptNumber: 3 },
    { id: 7, receiptNumber: 4 },
    { id: 8, receiptNumber: 5 },
    { id: 1, receiptNumber: 10 },
    { id: 3, receiptNumber: 12 },
    { id: 6, receiptNumber: 32 },
  ]);
});

test("Sort array descending", async () => {
  const array = [
    { id: 1, receiptNumber: 10 },
    { id: 2, receiptNumber: 2 },
    { id: 3, receiptNumber: 12 },
    { id: 4, receiptNumber: 3 },
    { id: 5, receiptNumber: 1 },
    { id: 6, receiptNumber: 32 },
    { id: 7, receiptNumber: 4 },
    { id: 8, receiptNumber: 5 },
  ];

  const result = sortArrayByReceiptNumber(array, "decending");
  expect(result).toStrictEqual([
    { id: 6, receiptNumber: 32 },
    { id: 3, receiptNumber: 12 },
    { id: 1, receiptNumber: 10 },
    { id: 8, receiptNumber: 5 },
    { id: 7, receiptNumber: 4 },
    { id: 4, receiptNumber: 3 },
    { id: 2, receiptNumber: 2 },
    { id: 5, receiptNumber: 1 },
  ]);
});

test("Sort empty array", async () => {
  const array = [];

  const result = sortArrayByReceiptNumber(array, "decending");
  expect(result).toStrictEqual([]);
});
