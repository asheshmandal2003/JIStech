import mongoose from "mongoose";

const { Schema } = mongoose;

const authSchema = new Schema({
  firstName: String,
  lastName: String,
  phoneNo: Number,
  location: String,
  aadhaarNo: Number,
});

export const User = mongoose.model("User", authSchema);
