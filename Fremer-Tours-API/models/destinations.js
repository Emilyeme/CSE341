import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Destination name is required"],
    trim: true
  },

  location: {
    type: String,
    required: [true, "Location is required"],
    trim: true
  },

  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true
  },

  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"]
  },

  duration: {
    type: String,
    required: [true, "Duration is required"],
    trim: true
  },

  category: {
    type: String,
    required: [true, "Category is required"],
    trim: true
  },

  available: {
    type: Boolean,
    required: true,
    default: true
  },

  image: {
    type: String,
    required: [true, "Image is required"],
    trim: true
  }
});

const Destination = mongoose.model("Destination", destinationSchema);

export default Destination;