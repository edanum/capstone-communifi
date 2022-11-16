import dbConnect from "../../../library/dbConnect";
import { getUserByEmail } from "../../../services/userServices";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  switch (request.method) {
    case "GET":
      const user = await getUserByEmail(id);
      return response.status(200).json(user);

    default:
      return response
        .status(405)
        .json({ message: "HTTP method is not allowed" });
  }
}
