import express from "express";
import { aboutMe, login, register } from "../controller/userController.js";
import { isAuthenticated } from "../middleware/auth.js";
const router = express.Router();

router.post("/register", register).post("/login", login);
router.get("/about", isAuthenticated, aboutMe);

export default router;
