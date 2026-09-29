import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true
  },

  lastName: {
    type: String,
    required: [true, "Last name is required"],
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

  favoriteColor: {
    type: String,
    required: [true, "Favorite color is required"],
    trim: true
  },

  birthday: {
    type: String,
    required: [true, "Birthday is required"],
    trim: true,
    match: [
      /^\d{4}-\d{2}-\d{2}$/,
      "Birthday must use YYYY-MM-DD format"
    ]
  }
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;