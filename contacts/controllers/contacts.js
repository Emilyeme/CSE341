import mongoose from "mongoose";
import Contact from "../models/contacts.js";

// GET all contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();

    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving contacts",
      error: error.message
    });
  }
};


// GET one contact by ID
export const getContactById = async (req, res) => {
  try {
    // Check if the ID is a valid MongoDB ID
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid contact ID"
      });
    }

    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        message: "Contact not found"
      });
    }

    res.status(200).json(contact);

  } catch (error) {
    res.status(500).json({
      message: "Error retrieving contact",
      error: error.message
    });
  }
};


// POST create a new contact
export const createContact = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday
    } = req.body;

    // Check that all fields were provided
    if (
      !firstName ||
      !lastName ||
      !email ||
      !favoriteColor ||
      !birthday
    ) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday
    });

    const savedContact = await newContact.save();

    res.status(201).json({
      message: "Contact created successfully",
      contactId: savedContact._id
    });

  } catch (error) {

    // Mongoose validation error
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation error",
        errors: Object.values(error.errors).map(
          (err) => err.message
        )
      });
    }

    res.status(500).json({
      message: "Error creating contact",
      error: error.message
    });
  }
};


// PUT update a contact
export const updateContact = async (req, res) => {
  try {
    // Check if the ID is valid
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid contact ID"
      });
    }

    const {
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday
    } = req.body;

    // Check that all fields were provided
    if (
      !firstName ||
      !lastName ||
      !email ||
      !favoriteColor ||
      !birthday
    ) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        firstName,
        lastName,
        email,
        favoriteColor,
        birthday
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedContact) {
      return res.status(404).json({
        message: "Contact not found"
      });
    }

    res.status(204).send();

  } catch (error) {

    // Mongoose validation error
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation error",
        errors: Object.values(error.errors).map(
          (err) => err.message
        )
      });
    }

    res.status(500).json({
      message: "Error updating contact",
      error: error.message
    });
  }
};


// DELETE a contact
export const deleteContact = async (req, res) => {
  try {
    // Check if the ID is valid
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid contact ID"
      });
    }

    const deletedContact = await Contact.findByIdAndDelete(
      req.params.id
    );

    if (!deletedContact) {
      return res.status(404).json({
        message: "Contact not found"
      });
    }

    res.status(204).send();

  } catch (error) {
    res.status(500).json({
      message: "Error deleting contact",
      error: error.message
    });
  }
};