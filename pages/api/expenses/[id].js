import dbConnect from "../../../library/dbConnect";
import Expense from "../../../models/Expense";
import { getExpenseById } from "../../../services/expenseServices";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  switch (request.method) {
    case "GET":
      const expense = await getExpenseById(id);
      return response.status(200).json(expense);
    case "PUT":
      const formData = JSON.parse(request.body);
      const updatedExpense = Expense.findByIdAndUpdate(
        id,
        formData,
        function (err, docs) {
          if (err) {
            console.log(err);
          } else {
            return docs;
          }
        }
      );
      return response.status(200).json({
        message: "Expense updated",
        updatedExpense: updatedExpense._update,
      });
    default:
      return response
        .status(405)
        .json({ message: "HTTP method is not allowed" });
  }
}
