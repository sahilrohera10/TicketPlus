import { Request, Response } from "express";
import { MAKE_PAYMENT } from "../services/payments.service";
const { Queue } = require("bullmq");
require("dotenv").config({ path: `${process.cwd()}/.env` });

import IORedis from "ioredis";

const connection = new IORedis(process.env.REDIS_BULLMQ_URL || "", {
  maxRetriesPerRequest: null,
});

const email_queue = new Queue("email-queue", {
  connection,
});

async function init() {
  const res = await email_queue.add("booking confirmed", {
    email: "sahilrohera10@gmail.com",
    msg: "booking confirmed",
  });
  console.log("Message added into the queue => ", res.id);
}

export async function make_a_payment(req: Request, res: Response) {
  try {
    //add a joi/zod validation here for body
    const Body = req.body;

    const pay = await MAKE_PAYMENT(Body);

    // update payment status of the particular booking

    // i have booking id
    // call get a booked ticket service which returns a booked ticket
    // add this message into the queue to send a mail with a ticket
    init();
    return res.status(200).json({ msg: "Payment done successfully", pay });
  } catch (error) {
    console.log("Error in payment =>", error);
    return res.status(500).json({ msg: "Internal server error", error });
  }
}
