import {
  ticket_book,
  get_booked_ticket,
  get_all_bookings,
} from "../controllers/booking.controller";

import express, { Router } from "express";
// const express = require("express").router()
const booking: Router = express.Router();

booking.post("/", ticket_book);
booking.get("/:booking_id", get_booked_ticket);
booking.get("/bookings/:user_id", get_all_bookings);

module.exports = booking;
