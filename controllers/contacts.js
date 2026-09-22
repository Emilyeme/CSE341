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
    res.status(500).json({
      message: "Error creating contact",
      error: error.message
    });
  }
};

// PUT update a contact
export const updateContact = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday
    } = req.body;

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
    res.status(500).json({
      message: "Error updating contact",
      error: error.message
    });
  }
};

// DELETE a contact
export const deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);

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