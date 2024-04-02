import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import auth from "./apis/auth.js";

dotenv.config({ path: './config.env'});

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", auth);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});