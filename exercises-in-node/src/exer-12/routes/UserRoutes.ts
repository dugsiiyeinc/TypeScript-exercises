
import express, { Request } from "express";
import { loginUser } from "../controllers/UserController";
const router = express.Router();

router.post("/login", loginUser);

export default router;