import User from "../models/User.model.js";

export const index = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } 
  catch (error) {
    console.error(error);
  }
};
