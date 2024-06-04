import { IPayment } from "../utils/interfaces";
const payments = require("../../db/models/payments");

export async function MAKE_PAYMENT(Body: IPayment) {
  try {
    const { action_id, transaction_id, action_type } = Body;

    const main_body = {
      action_id,
      transaction_id,
      action_type,
      date_of_payment: new Date(),
    };

    const pay = await payments.create(main_body);
    return pay;
  } catch (error: any) {
    throw new Error(error);
  }
}
