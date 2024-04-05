import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({ path: './.env'});

// Routes
import auth from "./routes/auth.js";
import users from "./routes/users.js";

// Middlewares
import { notFound, errorHandler } from "./middlewares/error.middleware.js";

// Connecting to MongoDB
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

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// Routes
app.use(`${apiPrefix}/auth`, auth);
app.use(`${apiPrefix}/users`, users);

// Middlewares
app.use(notFound);
app.use(errorHandler);

// start the Express server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});