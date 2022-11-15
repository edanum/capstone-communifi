import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: false },
  emailVerified: { type: String, required: false },
  team: { type: String, required: false },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
