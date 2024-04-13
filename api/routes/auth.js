import express from "express";

// Controllers
import { 
  tokenVerifier,
  signin,
  signup,
  signout,
  isEmailAvailable 
} from "../controllers/auth.controller.js";

// Middleware
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/verify", tokenVerifier);

router.post("/signin", signin)
router.post("/signup", signup);
router.post("/signout", signout)

router.route("/email/:email").get(isEmailAvailable);

export default router;


