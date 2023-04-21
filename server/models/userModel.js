import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

export default mongoose.model("user", userSchema);
