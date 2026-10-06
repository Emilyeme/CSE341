import express from "express";
import cors from "cors";
import  "dotenv/config";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" with { type: "json" };
import session from "express-session";
import passport from "./config/passport.js";


import connectDB from "./config/db.js";
import destinationRoutes from "./routes/destinations.js";
import bookingRoutes from "./routes/bookings.js";
import hotelRoutes from "./routes/hotels.js";
import tourRoutes from "./routes/tours.js";
import authRoutes from "./routes/auth.js";


const app = express();
const PORT = process.env.PORT || 8080;

// Swagger setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());


app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Fremer Tours and Travel API",
    documentation: "/api-docs"
  });
});

// Routes
app.use("/destinations", destinationRoutes);
app.use("/bookings", bookingRoutes);
app.use("/hotels", hotelRoutes);
app.use("/tours", tourRoutes);
app.use("/auth", authRoutes);

// Connect to MongoDB
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});