import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

import User from "../models/User.model.js";
import generateToken from "../utils/generate.token.js";
import { verifyToken } from "../utils/verify.token.js";
import { sanitizeObject } from "../utils/sanitize.input.js";

const tokenVerifier = asyncHandler(async (req, res) => {
  if (req.cookies.jwt) {
    const token = req.cookies.jwt;
    const isVerified = verifyToken(token);

    if (isVerified) {
      res.status(200).json({
        verified: true,
      });
    } 
    else {
      res.status(401);
      throw new Error("Token is not valid.");
    }
  }
  else {
    res.status(401);
    throw new Error("Token is not provided in request.");
  }
});

const signin = asyncHandler(async (req, res) => {
  const { email, password } = sanitizeObject(req.body);

  // Validations
  if (!email) {
    res.status(400);
    throw Error("Email is required.");
  }
  if (!password) {
    res.status(400);
    throw Error("Password is required.");
  }

  const user = await User.findOne({ email });

  if (user && (await user.validatePassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      message: "User credentials are correct.",
    });
  } 
  else {
    res.status(401);
    throw new Error("Invalid email or password.");
  }
  
});

const signup = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validations
  if (!email) {
    res.status(400);
    throw Error("Email is required.");
  }
  if (!password) {
    res.status(400);
    throw Error("Password is required.");
  }

  const emailExists = await User.findOne({ email });
  if (emailExists) {
    res.status(400);
    throw Error("Email is already taken.");
  }

  const salt = await bcrypt.genSalt(10);

  const newUser = await User.create({
    email,
    password: await bcrypt.hash(password, salt),
  });

  if (newUser) {
    generateToken(res, newUser._id);
    res.status(201).json({
      message: "User created successfully.",  
    });
  } 
  else {
    res.status(400);
    throw new Error("Something went wrong.");
  }
});

const signout = asyncHandler(async (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({
    message: "User signed out successfully.",
  });
});

export { 
  tokenVerifier,
  signin,
  signup,
  signout 
}