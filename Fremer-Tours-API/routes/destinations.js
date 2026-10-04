import express from "express";
import { isAuthenticated } from "../middleware/authenticate.js";

import {
  getAllDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination
} from "../controllers/destinations.js";

const router = express.Router();

// GET all destinations
router.get("/", isAuthenticated, getAllDestinations);

// GET one destination
router.get("/:id", isAuthenticated, getDestinationById);

// POST create a destination
router.post("/", isAuthenticated, createDestination);

// PUT update a destination
router.put("/:id", isAuthenticated, updateDestination);

// DELETE a destination
router.delete("/:id", isAuthenticated, deleteDestination);

export default router;