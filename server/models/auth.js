import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const { Schema } = mongoose;

const authSchema = new Schema({
  firstName: String,
  lastName: String,
  phoneno: Number,
  location: String,
  aadharNo: Number,
  password: String,
});

authSchema.plugin(passportLocalMongoose, { usernameField: "phoneno" });

const User = mongoose.model("User", authSchema);
export default User;
