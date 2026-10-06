import mongoose from "mongoose";
import Tour from "../models/tours.js";

// GET all tours
export const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();

    res.status(200).json(tours);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving tours",
      error: error.message
    });
  }
};

// GET one tour by ID
export const getTourById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid tour ID"
      });
    }

    const tour = await Tour.findById(req.params.id);

    if (!tour) {
      return res.status(404).json({
        message: "Tour not found"
      });
    }

    res.status(200).json(tour);

  } catch (error) {
    res.status(500).json({
      message: "Error retrieving tour",
      error: error.message
    });
  }
};

// POST create a tour
export const createTour = async (req, res) => {
  try {
    const {
      name,
      destination,
      description,
      price,
      duration,
      category,
      maxPeople,
      available,
      image
    } = req.body;

    if (
      !name ||
      !destination ||
      !description ||
      price === undefined ||
      !duration ||
      !category ||
      maxPeople === undefined ||
      available === undefined ||
      !image
    ) {
      return res.status(400).json({
        message: "All tour fields are required"
      });
    }

    const newTour = new Tour({
      name,
      destination,
      description,
      price,
      duration,
      category,
      maxPeople,
      available,
      image
    });

    const savedTour = await newTour.save();

    res.status(201).json({
      message: "Tour created successfully",
      tourId: savedTour._id
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
      message: "Error creating tour",
      error: error.message
    });
  }
};

// PUT update a tour
export const updateTour = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid tour ID"
      });
    }

    const {
      name,
      destination,
      description,
      price,
      duration,
      category,
      maxPeople,
      available,
      image
    } = req.body;

    if (
      !name ||
      !destination ||
      !description ||
      price === undefined ||
      !duration ||
      !category ||
      maxPeople === undefined ||
      available === undefined ||
      !image
    ) {
      return res.status(400).json({
        message: "All tour fields are required"
      });
    }

    const updatedTour = await Tour.findByIdAndUpdate(
      req.params.id,
      {
        name,
        destination,
        description,
        price,
        duration,
        category,
        maxPeople,
        available,
        image
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedTour) {
      return res.status(404).json({
        message: "Tour not found"
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
      message: "Error updating tour",
      error: error.message
    });
  }
};

// DELETE a tour
export const deleteTour = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid tour ID"
      });
    }

    const deletedTour = await Tour.findByIdAndDelete(
      req.params.id
    );

    if (!deletedTour) {
      return res.status(404).json({
        message: "Tour not found"
      });
    }

    res.status(204).send();

  } catch (error) {
    res.status(500).json({
      message: "Error deleting tour",
      error: error.message
    });
  }
};