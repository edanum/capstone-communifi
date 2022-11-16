import User from "../models/User";
import dbConnect from "../library/dbConnect";

export async function getAllUsers() {
  const users = await User.find();
  const mappedUsers = users.map(
    ({ id, name, email, image, emailVerified, team }) => ({
      id,
      name,
      email,
      image,
      emailVerified,
      team,
    })
  );
  return mappedUsers;
}

export async function getUserByEmail(userEmail) {
  await dbConnect();
  const user = await User.findOne({ email: userEmail });

  const { id, name, email, image, emailVerified, team } = user;

  return {
    id,
    name,
    email,
    image,
    emailVerified,
    team,
  };
}
