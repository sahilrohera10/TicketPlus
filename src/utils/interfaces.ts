export interface IPayment {
  action_id: number;
  transaction_id: string;
  action_type: "Event" | "Booking";
}
