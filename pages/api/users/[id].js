import dbConnect from "../../../library/dbConnect";
import { getUserByEmail } from "../../../services/userServices";
import User from "../../../models/User";
import { getUserById } from "../../../services/userServices";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  switch (request.method) {
    case "GET":
      // SINCE THERE IS NO ID IN THE BEGINNING (JUST EMAIL) THIS STATEMENT IS DIVIDING THE PATH DEPENDING ON EMAIL/ID
      if (id.includes("@")) {
        const user = await getUserByEmail(id);
        return response.status(200).json(user);
      } else {
        const user = await getUserById(id);
        return response.status(200).json(user);
      }

    case "PUT":
      const formData = JSON.parse(request.body);
      const updatedUser = User.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            name: formData.name,
            city: formData.city,
            plz: formData.plz,
            street: formData.street,
            iban: formData.iban,
            team: formData.team,
          },
        },
        function (err, docs) {
          if (err) {
            console.log(err);
          } else {
            return docs;
          }
        }
      );

      return response.status(200).json({
        message: "User updated",
        updatedUser: updatedUser._update,
      });
    default:
      return response
        .status(405)
        .json({ message: "HTTP method is not allowed" });
  }
}
