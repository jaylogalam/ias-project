import express from "express";
import { signup, login, setStatus } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/setStatus", setStatus);

export default router