import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const { Schema } = mongoose;

const authSchema = new Schema({
  firstName: String,
  lastName: String,
  phoneNo: Number,
  location: String,
  coordinates: [Number],
  aadharNo: Number,
  password: String,
});

authSchema.plugin(passportLocalMongoose, { usernameField: "phoneNo" });

const User = mongoose.model("User", authSchema);
export default User;
