import mongoose from "mongoose";
import Booking from "../models/bookings.js";

// GET all bookings
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving bookings",
      error: error.message
    });
  }
};


// GET one booking by ID
export const getBookingById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid booking ID"
      });
    }

    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found"
      });
    }

    res.status(200).json(booking);

  } catch (error) {
    res.status(500).json({
      message: "Error retrieving booking",
      error: error.message
    });
  }
};


// POST create a booking
export const createBooking = async (req, res) => {
  try {
    const {
      customerName,
      email,
      phone,
      destination,
      travelDate,
      numberOfPeople,
      status,
      specialRequests
    } = req.body;

    if (
      !customerName ||
      !email ||
      !phone ||
      !destination ||
      !travelDate ||
      numberOfPeople === undefined
    ) {
      return res.status(400).json({
        message: "All required booking fields must be provided"
      });
    }

    const newBooking = new Booking({
      customerName,
      email,
      phone,
      destination,
      travelDate,
      numberOfPeople,
      status,
      specialRequests
    });

    const savedBooking = await newBooking.save();

    res.status(201).json({
      message: "Booking created successfully",
      bookingId: savedBooking._id
    });

  } catch (error) {

    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation error",
        errors: Object.values(error.errors).map(
          (err) => err.message
        )
      });
    }

    res.status(500).json({
      message: "Error creating booking",
      error: error.message
    });
  }
};


// PUT update a booking
export const updateBooking = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid booking ID"
      });
    }

    const {
      customerName,
      email,
      phone,
      destination,
      travelDate,
      numberOfPeople,
      status,
      specialRequests
    } = req.body;

    if (
      !customerName ||
      !email ||
      !phone ||
      !destination ||
      !travelDate ||
      numberOfPeople === undefined
    ) {
      return res.status(400).json({
        message: "All required booking fields must be provided"
      });
    }

    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        customerName,
        email,
        phone,
        destination,
        travelDate,
        numberOfPeople,
        status,
        specialRequests
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedBooking) {
      return res.status(404).json({
        message: "Booking not found"
      });
    }

    res.status(204).send();

  } catch (error) {

    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation error",
        errors: Object.values(error.errors).map(
          (err) => err.message
        )
      });
    }

    res.status(500).json({
      message: "Error updating booking",
      error: error.message
    });
  }
};


// DELETE a booking
export const deleteBooking = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid booking ID"
      });
    }

    const deletedBooking = await Booking.findByIdAndDelete(
      req.params.id
    );

    if (!deletedBooking) {
      return res.status(404).json({
        message: "Booking not found"
      });
    }

    res.status(204).send();

  } catch (error) {
    res.status(500).json({
      message: "Error deleting booking",
      error: error.message
    });
  }
};