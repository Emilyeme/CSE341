import express from "express";

import {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour
} from "../controllers/tours.js";

const router = express.Router();

// GET all tours
router.get("/", getAllTours);

// GET one tour
router.get("/:id", getTourById);

// POST create a tour
router.post("/", createTour);

// PUT update a tour
router.put("/:id", updateTour);

// DELETE a tour
router.delete("/:id", deleteTour);

export default router;