import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './../config.env'});

mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => {
    console.log('Successful connection in MongoDB');
  })
  .catch((err) => {
    console.log('Error: ' + err);
  });