import express from "express";
import { 
  tokenVerifier,
  signin,
  signup,
  signout 
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/verify", tokenVerifier);
router.post("/signin", signin)
router.post("/signup", signup);
router.post("/signout", signout)

export default router;


