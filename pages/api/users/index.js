import { getAllUsers } from "../../../services/userServices";
import dbConnect from "../../../library/dbConnect";

export default async function handler(request, response) {
  await dbConnect();

  switch (request.method) {
    case "GET":
      const expenses = await getAllUsers();
      return response.status(200).json(expenses);
    default:
      console.log("request method not defined");
  }
}
