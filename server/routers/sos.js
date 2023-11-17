import express from "express";
import { sendSOS } from "../controllers/sos.js";

const router = express.Router();

router.route("/sos").post(sendSOS);

export default router;
