import User from "../models/User.model.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { 
  sanitizeObject 
} from "../utils/validator.input.js";

const index = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json({'users': users});
});

const update = asyncHandler(async (req, res) => {
  const user = req.user
  const { email, password, firstName, lastName, birthday, contactNumber, 
          gender, address, signature, setup } = sanitizeObject(req.body);

  if (setup) { // Check if user is setting up account for the first time
    if (!firstName || !lastName || !birthday || !contactNumber ||
      !gender || !address || !signature) {
      res.status(400);
      throw Error("Please fill up all fields.");
    }
  }

  if (user) {
    user.firstName = firstName || user.firstName
    user.lastName = lastName || user.lastName
    user.birthday = birthday || user.birthday
    user.gender = gender || user.gender
    user.address = address || user.address
    user.signature = signature || user.signature

    if (email) {
      if (!await user.isValidEmail(email)) {
        res.status(404);
        throw Error("Please enter a valid email address.");
      } 

      if (await user.existingEmail(email)) {
        res.status(400);
        throw Error("Email is already in use.");
      }

      user.email = email;
    }

    if (password) {
      if (!await user.isGoodPassword(password)) {
        res.status(400);
        throw Error("Password must be at least 6 characters long.");
      }

      user.password = password;
    }

    if (contactNumber) {
      if (await user.existingContactNumber(contactNumber)) {
        res.status(400);
        throw Error("Contact number is already in use.");
      }

      user.contactNumber = contactNumber;
    }
    
    const updatedUser = await user.save()
    
    if (updatedUser) {
      setup ? user.isSetupDone = true : user.isSetupDone = user.isSetupDone

      res.status(200).json({
        message: "User updated successfully."
      });
    }
    else {
      res.status(400)
      throw new Error('Failed to update user.')
    }
  } 
  else {
    res.status(404)
    throw new Error('User not found.')
  }
});

const isCurrentUserSetupDone = asyncHandler(async (req, res) => {
  const user = req.user;

  if (user) {
    res.status(200).json({
      status: user.isSetupDone,
    });
  } 
  else {
    res.status(404);
    throw new Error("User not found.");
  }
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

export { 
  index,
  update,
  isCurrentUserSetupDone,
  getUserByEmail
};