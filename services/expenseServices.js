import dbConnect from "../library/dbConnect";
import Expense from "../models/Expense";
import today from "../library/today";
import { highestReceiptNumber } from "../library/highestReceiptNumber";

export async function getAllExpenses() {
  await dbConnect();
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

export async function addExpense(expense) {
  const expenses = await getAllExpenses();

  const dateOfSubmit = today();
  const name = "Marc Becker";
  const receiptNumber = highestReceiptNumber(expenses) + 1;
  const receipt =
    "https://i.postimg.cc/5yRwt6GD/26-Hornbach-schrauben-und-bohrer-PDF-Image-125305.png";

  const newExpense = await Expense.create({
    receiptNumber: receiptNumber,
    amount: expense.amount,
    description: expense.description,
    dateOfSubmit: "22.10.2022",
    comment: expense.comment,
    receipt: receipt,
    name: name,
  });
  console.log("das ist newExpense auf expenseSerices");
  console.log(newExpense);
  return newExpense;
}
