import { getAllExpenses } from "../../../services/expenseServices";
import dbConnect from "../../../library/dbConnect";

export default async function handler(request, response) {
  await dbConnect();

  switch (request.method) {
    case "GET":
      const expenses = await getAllExpenses();
      return response.status(200).json(expenses);
    default:
      console.log("request method not defined");
  }
}
