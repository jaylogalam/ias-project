import express from "express";
import { signup, login, setStatus, recovery } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/recovery", recovery);
router.post("/setStatus", setStatus);

export default router