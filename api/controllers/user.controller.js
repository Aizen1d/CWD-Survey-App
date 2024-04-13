import User from "../models/User.model.js";
import asyncHandler from "express-async-handler";

const index = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json({'users': users});
});

const getUserByEmail = asyncHandler(async (req, res) => {
  const email = req.params.email;
  const user = await User.findOne({
    email: email,
  });

  if (user) {
    res.status(200).json({
      user: user,
    });
  } 
  else {
    res.status(404);
    throw new Error("User not found.");
  }
});

export { index };