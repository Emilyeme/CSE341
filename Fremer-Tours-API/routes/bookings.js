import express from "express";
import { isAuthenticated } from "../middleware/authenticate.js";

import {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking
} from "../controllers/bookings.js";

const router = express.Router();

// GET all bookings
router.get("/", isAuthenticated, getAllBookings);

// GET one booking
router.get("/:id", isAuthenticated, getBookingById);

// POST create a booking
router.post("/", isAuthenticated, createBooking);

// PUT update a booking
router.put("/:id", isAuthenticated, updateBooking);

// DELETE a booking
router.delete("/:id", isAuthenticated, deleteBooking);

export default router;