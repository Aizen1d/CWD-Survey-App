import user from "../models/user.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  const newUser = new user({
    username,
    email,
    password,
  });

  newUser.save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};