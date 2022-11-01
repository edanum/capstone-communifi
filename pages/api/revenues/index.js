import dbConnect from "../../../library/dbConnect";
import { getAllRevenues, addRevenue } from "../../../services/revenueServices";

export default async function handler(request, response) {
  await dbConnect();

  switch (request.method) {
    case "GET":
      const revenues = await getAllRevenues();
      return response.status(200).json(revenues);
    case "POST":
      const postData = JSON.parse(request.body);
      const newRevenue = await addRevenue(postData);
      return response
        .status(201)
        .json({ message: "Revenue created", createId: newRevenue.id });
    default:
      console.log("request method not defined");
  }
}
