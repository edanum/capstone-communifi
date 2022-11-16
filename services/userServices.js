import User from "../models/User";

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
