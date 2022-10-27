import dbConnect from "../../../library/dbConnect";
import { getExpenseById } from "../../../services/expenseServices";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  switch (request.method) {
    case "GET":
      const expense = await getExpenseById(id);
      return response.status(200).json(expense);
    default:
      return response
        .status(405)
        .json({ message: "HTTP method is not allowed" });
  }
}
