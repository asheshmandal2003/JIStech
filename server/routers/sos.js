import express from "express";
import { sendSOS } from "../controllers/sos.js";

const router = express.Router();

router.route("/:id/sos").post(sendSOS);

export default router;
