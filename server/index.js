import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import User from "./models/auth.js";
import authRouter from "./routers/auth.js";
import otpRouter from "./routers/otpVerification.js";
import sosRouter from "./routers/sos.js";

const app = express();
if (process.env.NODE_ENV !== "production") dotenv.config();
const PORT = process.env.PORT || 6000;
const sessionConfig = {
  name: "Session",
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
};

app.use(cors());
app.use(express.json());
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/auth", authRouter);
app.use("/", otpRouter);
app.use("/", sosRouter);

await mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.log(err));
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
