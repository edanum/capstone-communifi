import { getAllExpenses } from "../../../services/expensesServices";

export default async function handler(request, response) {
  switch (request.method) {
    case "GET":
      const data = await getAllExpenses();
      return response.status(200).json(data);
    default:
      console.log("request method not defined");
  }
}
