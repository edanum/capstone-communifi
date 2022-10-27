import { addExpense, getAllExpenses } from "../../../services/expenseServices";
import dbConnect from "../../../library/dbConnect";
import Expense from "../../../models/Expense";
import { Model } from "mongoose";

export default async function handler(request, response) {
  await dbConnect();

  switch (request.method) {
    case "GET":
      const expenses = await getAllExpenses();
      return response.status(200).json(expenses);
    case "POST":
      const postData = JSON.parse(request.body);
      const newExpense = await addExpense(postData);
      return response
        .status(201)
        .json({ message: "Expense created", createId: newExpense.id });
    default:
      console.log("request method not defined");
  }
}
