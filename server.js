import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Professional from "./models/professional.js";

dotenv.config();

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

connectDB();

app.get("/professional", async (req, res) => {
  try {
    const professional = await Professional.findOne();

    if (!professional) {
      return res.status(404).json({
        message: "Professional information not found"
      });
    }

    res.json(professional);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving professional information",
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});