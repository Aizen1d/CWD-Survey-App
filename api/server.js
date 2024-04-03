import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({ path: './config.env'});

// Routes
import auth from "./routes/auth.js";
import users from "./routes/users.js";

// Conneciing to MongoDB
mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => {
    console.log('Successful connection in MongoDB');
  })
  .catch((err) => {
    console.log('Error: ' + err);
  });

const apiPrefix = "/api/v1";
const app = express();

app.use(cors());
app.use(express.json());

app.use(`${apiPrefix}/auth`, auth);
app.use(`${apiPrefix}/users`, users);

// start the Express server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});