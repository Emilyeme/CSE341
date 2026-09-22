import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";

import connectDB from "./config/db.js";
import contactRoutes from "./routes/contacts.js";
import swaggerSpec from "./swagger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Contacts routes
app.use("/contacts", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});