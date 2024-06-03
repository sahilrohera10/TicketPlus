import express from "express";
const app = express();
require("dotenv").config({ path: `${process.cwd()}/.env` });
const userRoute = require("../src/routes/user.route");

const PORT = process.env.APP_PORT || 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/v1/api/user", userRoute);

app.listen(PORT, async () => {
  console.log(`server is up and running at port => ${PORT}`);
});
