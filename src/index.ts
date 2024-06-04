import express from "express";
const db = require("../config/dbConnect.js");
const app = express();
require("dotenv").config({ path: `${process.cwd()}/.env` });
const userRoute = require("../src/routes/user.route");
const bookingRoute = require("../src/routes/booking.route");

const PORT = process.env.APP_PORT || 8000;
db();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/v1/api/user", userRoute);
app.use("/v1/api/booking", bookingRoute);


app.listen(PORT, async () => {
  console.log(`server is up and running at port => ${PORT}`);
});
