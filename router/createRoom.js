const express = require("express");
const router = express.Router();
const createRooms = require("../modules/createRoom")
router.get("/get",createRooms.getRooms);
router.post("/set",createRooms.setRooms);

module.exports = router;