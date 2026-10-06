import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, "Hotel name is required"],
    trim: true
  },

  location: {
    type: String,
    required: [true, "Hotel location is required"],
    trim: true
  },

  description: {
    type: String,
    required: [true, "Hotel description is required"],
    trim: true
  },

  pricePerNight: {
    type: Number,
    required: [true, "Price per night is required"],
    min: [0, "Price cannot be negative"]
  },

  rating: {
    type: Number,
    required: [true, "Hotel rating is required"],
    min: [1, "Rating must be at least 1"],
    max: [5, "Rating cannot be more than 5"]
  },

  roomsAvailable: {
    type: Number,
    required: [true, "Number of available rooms is required"],
    min: [0, "Rooms available cannot be negative"]
  },

  amenities: {
    type: String,
    required: [true, "Amenities are required"],
    trim: true
  },

  image: {
    type: String,
    required: [true, "Hotel image is required"],
    trim: true
  }

});

const Hotel = mongoose.model("Hotel", hotelSchema);

export default Hotel;