import express from "express";

import {
  getAllHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel
} from "../controllers/hotels.js";

const router = express.Router();

// GET all hotels
router.get("/", getAllHotels);

// GET one hotel
router.get("/:id", getHotelById);

// POST create a hotel
router.post("/", createHotel);

// PUT update a hotel
router.put("/:id", updateHotel);

// DELETE a hotel
router.delete("/:id", deleteHotel);

export default router;