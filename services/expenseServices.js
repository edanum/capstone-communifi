import Expense from "../models/Expense";
import today from "../library/today";
import { highestReceiptNumber } from "../library/highestReceiptNumber";
import { getUserByEmail } from "../services/userServices";

export async function getAllExpenses() {
  const expenses = await Expense.find().populate("name");

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
      status,
    }) => ({
      id,
      receiptNumber,
      amount,
      description,
      dateOfSubmit,
      comment,
      receipt,
      name: name.name,
      status,
    })
  );
  return mappedExpenses;
}

export async function getExpenseById(expenseId) {
  const expense = await Expense.findById(expenseId).populate("name");

  const {
    id,
    receiptNumber,
    amount,
    description,
    dateOfSubmit,
    comment,
    receipt,
    name,
    status,
  } = expense;
  return {
    id,
    receiptNumber,
    amount,
    description,
    dateOfSubmit,
    comment,
    receipt,
    name: name.name,
    status,
  };
}

export async function addExpense(expense) {
  const expenses = await getAllExpenses();
  const userName = await getUserByEmail(expense.user.email);
  const newExpense = await Expense.create({
    receiptNumber: highestReceiptNumber(expenses) + 1,
    amount: expense.amount,
    description: expense.description,
    dateOfSubmit: today(),
    comment: expense.comment,
    receipt: expense.receipt,
    name: userName._id,
    status: "Eingereicht",
  });

  return newExpense;
}
