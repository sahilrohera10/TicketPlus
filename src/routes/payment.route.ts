import { make_a_payment } from "../controllers/payments.controller";

import express, { Router } from "express";
const payment: Router = express.Router();

payment.post("/", make_a_payment);

module.exports = payment;
