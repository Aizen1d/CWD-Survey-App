import validator from "validator";

const isEmail = (value) => {
  return validator.isEmail(value);
}

const sanitizeString = (value) => {
  let sanitizedValue;

  if (typeof value === "string") {
    sanitizedValue = validator.escape(value);
    sanitizedValue = validator.trim(sanitizedValue);

    return sanitizedValue;
  }
  else {
    return value;
  }
}

const sanitizeObject = (value) => {
  let sanitizedObject = {};

  if (typeof value === "object") {
    for (const key in value) {
      sanitizedObject[key] = sanitizeString(value[key]);
    }

    return sanitizedObject;
  }
  else {
    return value;
  }
}

export { 
  isEmail,
  sanitizeString, 
  sanitizeObject 
};