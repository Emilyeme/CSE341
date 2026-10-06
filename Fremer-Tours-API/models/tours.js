import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, "Tour name is required"],
    trim: true
  },

  destination: {
    type: String,
    required: [true, "Destination is required"],
    trim: true
  },

  description: {
    type: String,
    required: [true, "Tour description is required"],
    trim: true
  },

  price: {
    type: Number,
    required: [true, "Tour price is required"],
    min: [0, "Price cannot be negative"]
  },

  duration: {
    type: String,
    required: [true, "Tour duration is required"],
    trim: true
  },

  category: {
    type: String,
    required: [true, "Tour category is required"],
    trim: true
  },

  maxPeople: {
    type: Number,
    required: [true, "Maximum number of people is required"],
    min: [1, "Maximum people must be at least 1"]
  },

  available: {
    type: Boolean,
    required: true,
    default: true
  },

  image: {
    type: String,
    required: [true, "Tour image is required"],
    trim: true
  }

});

const Tour = mongoose.model("Tour", tourSchema);

export default Tour;