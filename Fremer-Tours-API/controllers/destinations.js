import mongoose from "mongoose";
import Destination from "../models/destinations.js";

// GET all destinations
export const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();

    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving destinations",
      error: error.message
    });
  }
};


// GET one destination by ID
export const getDestinationById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid destination ID"
      });
    }

    const destination = await Destination.findById(req.params.id);

    if (!destination) {
      return res.status(404).json({
        message: "Destination not found"
      });
    }

    res.status(200).json(destination);

  } catch (error) {
    res.status(500).json({
      message: "Error retrieving destination",
      error: error.message
    });
  }
};


// POST create a destination
export const createDestination = async (req, res) => {
  try {
    const {
      name,
      location,
      description,
      price,
      duration,
      category,
      available,
      image
    } = req.body;

    if (
      !name ||
      !location ||
      !description ||
      price === undefined ||
      !duration ||
      !category ||
      available === undefined ||
      !image
    ) {
      return res.status(400).json({
        message: "All destination fields are required"
      });
    }

    const newDestination = new Destination({
      name,
      location,
      description,
      price,
      duration,
      category,
      available,
      image
    });

    const savedDestination = await newDestination.save();

    res.status(201).json({
      message: "Destination created successfully",
      destinationId: savedDestination._id
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
      message: "Error creating destination",
      error: error.message
    });
  }
};


// PUT update a destination
export const updateDestination = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid destination ID"
      });
    }

    const {
      name,
      location,
      description,
      price,
      duration,
      category,
      available,
      image
    } = req.body;

    if (
      !name ||
      !location ||
      !description ||
      price === undefined ||
      !duration ||
      !category ||
      available === undefined ||
      !image
    ) {
      return res.status(400).json({
        message: "All destination fields are required"
      });
    }

    const updatedDestination = await Destination.findByIdAndUpdate(
      req.params.id,
      {
        name,
        location,
        description,
        price,
        duration,
        category,
        available,
        image
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedDestination) {
      return res.status(404).json({
        message: "Destination not found"
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
      message: "Error updating destination",
      error: error.message
    });
  }
};


// DELETE a destination
export const deleteDestination = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid destination ID"
      });
    }

    const deletedDestination = await Destination.findByIdAndDelete(
      req.params.id
    );

    if (!deletedDestination) {
      return res.status(404).json({
        message: "Destination not found"
      });
    }

    res.status(204).send();

  } catch (error) {
    res.status(500).json({
      message: "Error deleting destination",
      error: error.message
    });
  }
};