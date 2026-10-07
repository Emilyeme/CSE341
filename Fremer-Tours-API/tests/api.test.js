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
  getAllDestinations
} from "../controllers/destinations.js";

import {
  getAllBookings
} from "../controllers/bookings.js";

import {
  getAllHotels
} from "../controllers/hotels.js";

import {
  getAllTours
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

});