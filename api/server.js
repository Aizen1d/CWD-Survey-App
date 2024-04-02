import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import auth from "./routes/auth.js";

dotenv.config({ path: './config.env'});

const PORT = process.env.PORT;
const app = express();
const apiPrefix = "/api/v1";

app.use(cors());
app.use(express.json());
app.use(apiPrefix, auth);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});