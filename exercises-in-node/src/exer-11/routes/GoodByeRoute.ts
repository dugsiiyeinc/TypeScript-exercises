import express from "express";
import { goodByeController } from "../controllers/GoodByeController";

const router = express.Router();

router.get("/", goodByeController);
export default router;