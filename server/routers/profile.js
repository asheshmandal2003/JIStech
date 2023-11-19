import express from "express";
import { getProffileDetails } from "../controllers/profile.js";

const router = express.Router();

router.route("/user/:id").post(getProffileDetails);

export default router;
