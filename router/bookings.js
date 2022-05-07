const express = require("express");
const router = express.Router();
const createBookings = require("../modules/bookings")
router.get("/get",createBookings.getBookings);
router.post("/set",createBookings.setBookings);
router.get("/getbookedrooms",createBookings.getBookingsWithRoomsData);
router.get("/getbookedroomswithcustomers",createBookings.getBookingsWithAllCustomers);
module.exports = router;