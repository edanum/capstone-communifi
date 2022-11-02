import dbConnect from "../../../library/dbConnect";
import Revenue from "../../../models/Revenue";
import { getRevenueById } from "../../../services/revenueServices";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  switch (request.method) {
    case "GET":
      const revenue = await getRevenueById(id);
      return response.status(200).json(revenue);
    case "PUT":
      const formData = JSON.parse(request.body);
      const updatedRevenue = Revenue.findByIdAndUpdate(
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
        message: "Revenue updated",
        updatedRevenue: updatedRevenue._update,
      });
    default:
      return response
        .status(405)
        .json({ message: "HTTP method is not allowed" });
  }
}
