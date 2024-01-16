import express from "express";
import { checkOut } from "../controllers/paymentController.js";

const router = express.Router();

router.route("/").post(checkOut);

export default router;
