import express from "express";

// Controllers
import { index } from "../controllers/user.controller.js";

// Middleware
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/").get(index);  

export default router;