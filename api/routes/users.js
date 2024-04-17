import express from "express";

// Controllers
import { 
  index,
  update,
  isCurrentUserSetupDone,
  getUserByEmail
} from "../controllers/user.controller.js";

// Middleware
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/").get(protect, index);  
router.route("/").put(protect, update);

router.route("/setup").get(protect, isCurrentUserSetupDone);
router.route("/:email").get(protect, getUserByEmail);

export default router;