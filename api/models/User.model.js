import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { 
  isEmail,
} from "../utils/validator.input.js";

const Schema = mongoose.Schema;
const userSchema = new Schema
({
  email: {
    type: String,
    required: true,
    unique: true,
  },  
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    default: "",
    max: 50,
  },
  lastName: {
    type: String,
    default: "",
    max: 50,
  },
  birthday: {
    type: Date,
    default: Date.now,
  },
  contactNumber: {
    type: String,
    default: "",
    max: 15,
  },
  gender: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  signature: {
    type: String,
    default: "",
  },
}, 
{
  timestamps: true,
});

userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password; // Remove password from the response
  return user;
};

userSchema.methods.isValidEmail = function (email) {
  return isEmail(email);
};

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }

  next();
});

userSchema.methods.existingEmail = async function (email) {
  const existingEmail = await this.model('User').findOne({
    email: email
  });

  return existingEmail ? true : false;
}

userSchema.methods.existingContactNumber = async function (contactNumber) {
  const existingContact = await this.model('User').findOne({
    contactNumber: contactNumber
  });

  return existingContact ? true : false;
}

userSchema.methods.isGoodPassword = function (password) {
  return password.length >= 6;
};

userSchema.methods.validatePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;