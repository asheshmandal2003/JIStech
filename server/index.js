import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
if (process.env.NODE_ENV !== "production") dotenv.config();
const PORT = process.env.PORT || 6000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

await mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.log(err));
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
