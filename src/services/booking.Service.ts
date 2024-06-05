const { client } = require("../../config/redisCache");

const events = require("../../db/models/events");
const bookings = require("../../db/models/bookings");
const users = require("../../db/models/users");
const sequelize = require("../../config/database.js");

export async function CREATE_BOOKING(
  user_id: string,
  event_id: string,
  num_of_seats: number
) {
  const transaction = await sequelize.transaction(); // Start a transaction
  try {
    const event = await events.findByPk(event_id, { transaction });
    if (!event) {
      throw new Error("Event not found");
    }

    const total_tickets_available = event.max_tickets_available;
    if (num_of_seats > total_tickets_available) {
      throw new Error("Not Enough Seats, Please choose less seats");
    }

    const total = event.ticket_price * num_of_seats;
    let subtotal = total;

    if (event.is_taxable) {
      const taxPercentage = parseFloat(event.tax_percet);
      const taxAmount = total * (taxPercentage / 100);
      subtotal += taxAmount;
    }

    subtotal = Math.round(subtotal);

    const booking_event = await bookings.create(
      {
        user_id,
        event_id,
        num_of_seats,
        subtotal,
        payment_status: "PENDING",
      },
      { transaction }
    );

    event.max_tickets_available -= num_of_seats;
    await event.save({ transaction });

    await transaction.commit(); // Commit the transaction if all operations are successful
    return booking_event;
  } catch (error: any) {
    await transaction.rollback(); // Rollback the transaction in case of any error
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
      email: user.email,
    };

    console.log("ticket=>", ticket);
    return ticket;
  } catch (error: any) {
    console.log("error in serv->", error);
    throw new Error(error);
  }
}

export async function GET_ALL_BOOKINGS(user_id: string) {
  try {
    const cachedData = await client.get(user_id);

    if (cachedData) {
      return JSON.parse(cachedData);
    }

    // Else look into db
    const booking_ticket_list = await bookings.findAll({
      where: {
        user_id: user_id,
      },
    });

    // Save into cache
    await client.setEx(user_id, 1440, JSON.stringify(booking_ticket_list));

    // Return
    return booking_ticket_list;
  } catch (error: any) {
    console.log("error in serv->", error);
    throw new Error(error);
  }
}
