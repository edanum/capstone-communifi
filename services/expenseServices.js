import dbConnect from "../library/dbConnect";
import Expense from "../models/Expense";
import today from "../library/today";
import { highestReceiptNumber } from "../library/highestReceiptNumber";

export async function getAllExpenses() {
  // await dbConnect();
  const expenses = await Expense.find();
  const mappedExpenses = expenses.map(
    ({
      id,
      receiptNumber,
      amount,
      description,
      dateOfSubmit,
      comment,
      receipt,
      name,
    }) => ({
      id,
      receiptNumber,
      amount,
      description,
      dateOfSubmit,
      comment,
      receipt,
      name,
    })
  );
  return mappedExpenses;
}

export async function getExpenseById(expenseId) {
  // await dbConnect();

  const expense = await Expense.findById(expenseId);

  const {
    id,
    receiptNumber,
    amount,
    description,
    dateOfSubmit,
    comment,
    receipt,
    name,
  } = expense;
  return {
    id,
    receiptNumber,
    amount,
    description,
    dateOfSubmit,
    comment,
    receipt,
    name,
  };
}

export async function addExpense(expense) {
  const expenses = await getAllExpenses();
 

  const newExpense = await Expense.create({
    receiptNumber: highestReceiptNumber(expenses) + 1,
    amount: expense.amount,
    description: expense.description,
    dateOfSubmit: today(),
    comment: expense.comment,
    receipt: expense.receipt,
    name: "Marc Becker",
  });

  return newExpense;
}
