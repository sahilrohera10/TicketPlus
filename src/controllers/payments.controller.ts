import { Request, Response } from "express";
import { MAKE_PAYMENT } from "../services/payments.service";

export async function make_a_payment(req: Request, res: Response) {
  try {
    //add a joi/zod validation here for body
    const Body = req.body;

    const pay = await MAKE_PAYMENT(Body);

    return res.status(200).json({ msg: "Payment done successfully", pay });
  } catch (error) {
    console.log("Error in payment =>", error);
    return res.status(500).json({ msg: "Internal server error", error });
  }
}
