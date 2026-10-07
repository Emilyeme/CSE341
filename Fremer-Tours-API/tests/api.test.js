import {
  jest,
  describe,
  test,
  expect,
  beforeEach
} from "@jest/globals";

import Destination from "../models/destinations.js";
import Booking from "../models/bookings.js";
import Hotel from "../models/hotels.js";
import Tour from "../models/tours.js";

import {
  getAllDestinations,
  getDestinationById
} from "../controllers/destinations.js";

import {
  getAllBookings,
  getBookingById
} from "../controllers/bookings.js";

import {
  getAllHotels,
  getHotelById
} from "../controllers/hotels.js";

import {
  getAllTours,
  getTourById
} from "../controllers/tours.js";


const mockResponse = () => {
  const res = {};

  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);

  return res;
};


describe("GET API Controllers", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });


  // DESTINATIONS - GET ALL
  test("GET destinations should return 200 and an array", async () => {

    const mockDestinations = [
      {
        name: "Murchison Falls National Park",
        location: "Masindi, Uganda"
      }
    ];

    jest.spyOn(Destination, "find")
      .mockResolvedValue(mockDestinations);

    const req = {};
    const res = mockResponse();

    await getAllDestinations(req, res);

    expect(Destination.find).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockDestinations);

  });


  // DESTINATIONS - GET BY ID
  test("GET destination by ID should return 200", async () => {

    const mockDestination = {
      _id: "507f1f77bcf86cd799439011",
      name: "Murchison Falls National Park",
      location: "Masindi, Uganda"
    };

    jest.spyOn(Destination, "findById")
      .mockResolvedValue(mockDestination);

    const req = {
      params: {
        id: "507f1f77bcf86cd799439011"
      }
    };

    const res = mockResponse();

    await getDestinationById(req, res);

    expect(Destination.findById)
      .toHaveBeenCalledWith("507f1f77bcf86cd799439011");

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockDestination);

  });


  // BOOKINGS - GET ALL
  test("GET bookings should return 200 and an array", async () => {

    const mockBookings = [
      {
        customerName: "Emily Emerson",
        destination: "Murchison Falls National Park"
      }
    ];

    jest.spyOn(Booking, "find")
      .mockResolvedValue(mockBookings);

    const req = {};
    const res = mockResponse();

    await getAllBookings(req, res);

    expect(Booking.find).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockBookings);

  });


  // BOOKINGS - GET BY ID
  test("GET booking by ID should return 200", async () => {

    const mockBooking = {
      _id: "507f1f77bcf86cd799439012",
      customerName: "Emily Emerson",
      destination: "Murchison Falls National Park"
    };

    jest.spyOn(Booking, "findById")
      .mockResolvedValue(mockBooking);

    const req = {
      params: {
        id: "507f1f77bcf86cd799439012"
      }
    };

    const res = mockResponse();

    await getBookingById(req, res);

    expect(Booking.findById)
      .toHaveBeenCalledWith("507f1f77bcf86cd799439012");

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockBooking);

  });


  // HOTELS - GET ALL
  test("GET hotels should return 200 and an array", async () => {

    const mockHotels = [
      {
        name: "Murchison Safari Lodge",
        location: "Masindi, Uganda"
      }
    ];

    jest.spyOn(Hotel, "find")
      .mockResolvedValue(mockHotels);

    const req = {};
    const res = mockResponse();

    await getAllHotels(req, res);

    expect(Hotel.find).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockHotels);

  });


  // HOTELS - GET BY ID
  test("GET hotel by ID should return 200", async () => {

    const mockHotel = {
      _id: "507f1f77bcf86cd799439013",
      name: "Murchison Safari Lodge",
      location: "Masindi, Uganda"
    };

    jest.spyOn(Hotel, "findById")
      .mockResolvedValue(mockHotel);

    const req = {
      params: {
        id: "507f1f77bcf86cd799439013"
      }
    };

    const res = mockResponse();

    await getHotelById(req, res);

    expect(Hotel.findById)
      .toHaveBeenCalledWith("507f1f77bcf86cd799439013");

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockHotel);

  });


  // TOURS - GET ALL
  test("GET tours should return 200 and an array", async () => {

    const mockTours = [
      {
        name: "Murchison Falls Safari Tour",
        destination: "Murchison Falls National Park"
      }
    ];

    jest.spyOn(Tour, "find")
      .mockResolvedValue(mockTours);

    const req = {};
    const res = mockResponse();

    await getAllTours(req, res);

    expect(Tour.find).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockTours);

  });


  // TOURS - GET BY ID
  test("GET tour by ID should return 200", async () => {

    const mockTour = {
      _id: "507f1f77bcf86cd799439014",
      name: "Murchison Falls Safari Tour",
      destination: "Murchison Falls National Park"
    };

    jest.spyOn(Tour, "findById")
      .mockResolvedValue(mockTour);

    const req = {
      params: {
        id: "507f1f77bcf86cd799439014"
      }
    };

    const res = mockResponse();

    await getTourById(req, res);

    expect(Tour.findById)
      .toHaveBeenCalledWith("507f1f77bcf86cd799439014");

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockTour);

  });

});