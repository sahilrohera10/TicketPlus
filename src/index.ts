import express from "express";
const db = require("../config/dbConnect.js");
const app = express();
require("dotenv").config({ path: `${process.cwd()}/.env` });

const saveRoute = require("../src/routes/save.route");
const userRoute = require("../src/routes/user.route");
const eventRoute = require("../src/routes/event.route")
const paymentRoute = require("../src/routes/payment.route");

const PORT = process.env.APP_PORT || 8000;


db();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/v1/api/user", userRoute);
app.use("/v1/api/event", eventRoute);
app.use("/v1/api/save", saveRoute);
app.use("/v1/api/payment", paymentRoute);

app.listen(PORT, async () => {
  console.log(`server is up and running at port => ${PORT}`);
});
