import express from "express";
const app = express();
require("dotenv").config({ path: `${process.cwd()}/.env` });

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, async () => {
  console.log(`server is up and running at port => ${PORT}`);
});
