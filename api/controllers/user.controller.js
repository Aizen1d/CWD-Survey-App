import User from "../models/User.model.js";
import asyncHandler from "express-async-handler";

const index = asyncHandler(async (req, res) => {
  res.status(401);
  throw new Error("Not Authorized");

  const users = await User.find({});
  res.json(users);
});

export { index };