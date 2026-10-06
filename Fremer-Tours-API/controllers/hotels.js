import mongoose from "mongoose";
import Hotel from "../models/hotels.js";

// GET all hotels
export const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();

    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving hotels",
      error: error.message
    });
  }
};

// GET one hotel by ID
export const getHotelById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid hotel ID"
      });
    }

    const hotel = await Hotel.findById(req.params.id);

    if (!hotel) {
      return res.status(404).json({
        message: "Hotel not found"
      });
    }

    res.status(200).json(hotel);

  } catch (error) {
    res.status(500).json({
      message: "Error retrieving hotel",
      error: error.message
    });
  }
};

// POST create a hotel
export const createHotel = async (req, res) => {
  try {
    const {
      name,
      location,
      description,
      pricePerNight,
      rating,
      roomsAvailable,
      amenities,
      image
    } = req.body;

    if (
      !name ||
      !location ||
      !description ||
      pricePerNight === undefined ||
      rating === undefined ||
      roomsAvailable === undefined ||
      !amenities ||
      !image
    ) {
      return res.status(400).json({
        message: "All hotel fields are required"
      });
    }

    const newHotel = new Hotel({
      name,
      location,
      description,
      pricePerNight,
      rating,
      roomsAvailable,
      amenities,
      image
    });

    const savedHotel = await newHotel.save();

    res.status(201).json({
      message: "Hotel created successfully",
      hotelId: savedHotel._id
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
      message: "Error creating hotel",
      error: error.message
    });
  }
};

// PUT update a hotel
export const updateHotel = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid hotel ID"
      });
    }

    const {
      name,
      location,
      description,
      pricePerNight,
      rating,
      roomsAvailable,
      amenities,
      image
    } = req.body;

    if (
      !name ||
      !location ||
      !description ||
      pricePerNight === undefined ||
      rating === undefined ||
      roomsAvailable === undefined ||
      !amenities ||
      !image
    ) {
      return res.status(400).json({
        message: "All hotel fields are required"
      });
    }

    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        location,
        description,
        pricePerNight,
        rating,
        roomsAvailable,
        amenities,
        image
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedHotel) {
      return res.status(404).json({
        message: "Hotel not found"
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
      message: "Error updating hotel",
      error: error.message
    });
  }
};

// DELETE a hotel
export const deleteHotel = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid hotel ID"
      });
    }

    const deletedHotel = await Hotel.findByIdAndDelete(
      req.params.id
    );

    if (!deletedHotel) {
      return res.status(404).json({
        message: "Hotel not found"
      });
    }

    res.status(204).send();

  } catch (error) {
    res.status(500).json({
      message: "Error deleting hotel",
      error: error.message
    });
  }
};