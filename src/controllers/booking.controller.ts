import { tryCatch } from "bullmq";
import { Request, Response } from "express";
import { GET_ALL_BOOKINGS } from "../services/booking.Service";
// const { booking } = require("../../db/models");
const {
  CREATE_BOOKING,
  GET_BOOKED_TICKET,
} = require("../services/booking.Service");
export async function ticket_book(req: Request, res: Response) {
  try {
    const { user_id, event_id, num_of_seats } = req.body;
    const booking = await CREATE_BOOKING(user_id, event_id, num_of_seats);
    return res.status(201).json({
      status: "Success",
      message: "Ticket Booking Successfull",
      data: booking,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal Server Error on registering the user", error });
  }
}

export async function get_booked_ticket(req: Request, res: Response) {
  const booking_id = req.params.booking_id;
  try {
    const booking_ticket = await GET_BOOKED_TICKET(booking_id);
    return res.status(200).json({
      status: "success",
      message: "Fetched Booked Ticket Successfully",
      data: booking_ticket,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal Server Error on registering the user", error });
  }
}

export async function get_all_bookings(req: Request, res: Response) {
  const { user_id } = req.params;
  try {
    const bookings = await GET_ALL_BOOKINGS(user_id);
    return res.status(200).json({
      status: "Success",
      message: "Fetched All Bookings Successfully",
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal Server Error on registering the user", error });
  }
}
