import User from "../models/User";

export async function getAllUsers() {
  const users = await User.find();
  const mappedUsers = users.map(
    ({ _id, id, name, email, image, emailVerified, team }) => ({
      _id,
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

  const {
    _id,
    id,
    name,
    email,
    image,
    emailVerified,
    city,
    plz,
    street,
    iban,
    team,
  } = user;

  return {
    _id,
    id,
    name,
    email,
    image,
    emailVerified,
    city,
    plz,
    street,
    iban,
    team,
  };
}
