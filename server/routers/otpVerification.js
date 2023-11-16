import express from "express";
import { sendOTP, verifyOTP } from "../utils/otpVerification.js";

const router = express.Router();

router.route("/send-otp").post(sendOTP);
router.route("/verify-otp").post(verifyOTP);

export default router;
