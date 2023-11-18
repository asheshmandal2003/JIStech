import express from "express";
import { signin, signup } from "../controllers/auth.js";
import passport from "passport";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/signin").post(passport.authenticate("local"), signin);

export default router;
