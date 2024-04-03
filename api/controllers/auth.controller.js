import User from "../models/User.model.js";

export const signup = async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;

  if (!username)
    return res.status(400).json("Username is required!");
  if (!email)
    return res.status(400).json("Email is required!");
  if (!password)
    return res.status(400).json("Password is required!");

  const newUser = new User({
    username,
    email,
    password,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } 
  catch (error) {
    console.error(error);
  }
};