import validator from "validator";

const isEmail = (value) => {
  return validator.isEmail(value);
}

export { 
  isEmail,
};