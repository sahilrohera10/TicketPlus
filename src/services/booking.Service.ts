const events = require("../../db/models/events");
const bookings = require("../../db/models/bookings");
const users = require("../../db/models/users");
export async function CREATE_BOOKING(
  user_id: string,
  event_id: string,
  num_of_seats: number
) {
  try {
    const event = await events.findByPk(event_id);
    if (!event) {
      throw new Error("Event not found");
    }
    console.log("event->", event);
    const total = event.ticket_price * num_of_seats;
    console.log("total->", total);

    let subtotal = total;
    if (event.is_taxable) {
      const taxPercentage = parseFloat(event.tax_percet);
      console.log("taxPercentage=>", taxPercentage);
      const taxAmount = total * (taxPercentage / 100);
      console.log("taxAmount=>", taxAmount);

      subtotal += taxAmount;
    }
    subtotal = Math.round(subtotal);
    console.log("subtotal=>", subtotal);
    const booking_event = await bookings.create({
      user_id,
      event_id,
      num_of_seats,
      subtotal,
      payment_status: "PENDING",
    });
    console.log("booking_event->", booking_event);
    return booking_event;
  } catch (error: any) {
    console.log("error in serv->", error);
    throw new Error(error);
  }
}

export async function GET_BOOKED_TICKET(booking_id: any) {
  try {
    const booking = await bookings.findOne({ id: booking_id });
    if (!booking) {
      throw new Error("No booking found");
    }
    const user = await users.findOne({ id: booking.user_id });
    if (!user) {
      throw new Error("No user found who booked this ticket");
    }
    const event = await events.findOne({ id: booking.event_id });
    if (!event) {
      throw new Error("No Event found regarding this booking");
    }

    // send out email id of the user as well
    const ticket = {
      event_name: event.title,
      event_url: event.thumbnail_url,
      event_genre: event.genre,
      date_of_event: event.date_of_event,
      time_of_event: event.time_of_event,
      seats: booking.num_of_seats,
      total_amt: booking.subtotal,
      booked_at: booking.createdAt,
      name: user.name,
    };

    console.log("ticket=>", ticket);
    return ticket;
  } catch (error: any) {
    console.log("error in serv->", error);
    throw new Error(error);
  }
}
