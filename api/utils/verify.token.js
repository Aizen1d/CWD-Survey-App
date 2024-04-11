import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const verifyToken = (token) => {
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (decoded) {
        return true;
      }
    } 
    catch (error) {
      return false;
    }
  } 
  else { 
    return false;
  }
};

export { verifyToken };