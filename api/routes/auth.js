import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/users", signup);

export default router;


