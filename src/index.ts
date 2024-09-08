import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { routes } from "./routes";

dotenv.config();

const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1/token", routes.tokenRouter);

//port
const PORT = parseInt(process.env.PORT!) || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
