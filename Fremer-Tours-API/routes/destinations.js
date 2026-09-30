import express from "express";

import {
  getAllDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination
} from "../controllers/destinations.js";

const router = express.Router();

// GET all destinations
router.get("/", getAllDestinations);

// GET one destination
router.get("/:id", getDestinationById);

// POST create a destination
router.post("/", createDestination);

// PUT update a destination
router.put("/:id", updateDestination);

// DELETE a destination
router.delete("/:id", deleteDestination);

export default router;