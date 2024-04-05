import User from "../models/User.model.js";
import asyncHandler from "express-async-handler";

const index = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json({'users': users});
});

export { index };