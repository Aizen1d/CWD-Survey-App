import express from "express";

// Controllers
import { index } from "../controllers/user.controller.js";

// Middleware
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/").get(protect, index);  
router.route("/:email").get(protect, index);

export default router;