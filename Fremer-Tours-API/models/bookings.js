import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: [true, "Customer name is required"],
    trim: true
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [
      /^\S+@\S+\.\S+$/,
      "Please enter a valid email address"
    ]
  },

  phone: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true
  },

  destination: {
    type: String,
    required: [true, "Destination is required"],
    trim: true
  },

  travelDate: {
    type: String,
    required: [true, "Travel date is required"],
    match: [
      /^\d{4}-\d{2}-\d{2}$/,
      "Travel date must use YYYY-MM-DD format"
    ]
  },

  numberOfPeople: {
    type: Number,
    required: [true, "Number of people is required"],
    min: [1, "At least one person is required"]
  },

  status: {
    type: String,
    required: true,
    enum: {
      values: ["Pending", "Confirmed", "Cancelled"],
      message: "Status must be Pending, Confirmed, or Cancelled"
    },
    default: "Pending"
  },

  specialRequests: {
    type: String,
    trim: true,
    default: ""
  }
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;