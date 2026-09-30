import express from "express";

import {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking
} from "../controllers/bookings.js";

const router = express.Router();

// GET all bookings
router.get("/", getAllBookings);

// GET one booking
router.get("/:id", getBookingById);

// POST create a booking
router.post("/", createBooking);

// PUT update a booking
router.put("/:id", updateBooking);

// DELETE a booking
router.delete("/:id", deleteBooking);

export default router;