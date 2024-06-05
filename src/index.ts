import express from "express";

const db = require("../config/dbConnect.js");

const app = express();
require("dotenv").config({ path: `${process.cwd()}/.env` });
const userRoute = require("../src/routes/user.route");
const bookingRoute = require("../src/routes/booking.route");
const eventRoute = require("../src/routes/event.route");
const paymentRoute = require("../src/routes/payment.route");
const saveRoute = require("../src/routes/save.route");
const schedule = require("node-schedule");

const PORT = process.env.APP_PORT || 8000;
db();

const restart = () => {
  console.log("server restarted");
};

schedule.scheduleJob("*/14 * * * *", restart);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/v1/api/user", userRoute);
app.use("/v1/api/booking", bookingRoute);

app.use("/v1/api/event", eventRoute);

app.use("/v1/api/payment", paymentRoute);
app.use("/v1/api/save", saveRoute);
app.listen(PORT, async () => {
  console.log(`server is up and running at port => ${PORT}`);
});
