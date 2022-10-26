import dbConnect from "../library/dbConnect";
import Expense from "../models/Expense";

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
