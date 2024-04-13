import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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
    min: 6,
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

userSchema.methods.validatePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;