// add express
import express from "express";
import blogRoutes from "./routes/blogRoutes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();

dotenv.config();

connectDB();

app.use("/api/blogs", blogRoutes);

app.use(express.json());

// start the lister for the server so it doesn't just stop on us after initial exection

// console.log("Process.env", process.env);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
