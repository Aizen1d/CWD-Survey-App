import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

import User from "../models/User.model.js";

export const signup = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;

  // Validations
  if (!username)
    return res.status(400).json("Username is required.");
  if (!email)
    return res.status(400).json("Email is required.");
  if (!password)
    return res.status(400).json("Password is required.");

  const usernameExists = await User.findOne({ username });
  if (usernameExists)
    return res.status(400).json("Username is already taken.");

  const emailExists = await User.findOne({ email });
  if (emailExists)
    return res.status(400).json("Email is already taken.");

  const salt = await bcrypt.genSalt(10);

  const newUser = await User.create({
    username,
    email,
    password: await bcrypt.hash(password, salt),
  });

  if (newUser) {
    res.status(201).json({
      message: "User created successfully.",  
      username: newUser.username,
      email: newUser.email,
    });
  } 
  else {
    res.status(400);
    throw new Error("Something went wrong.");
  }
});