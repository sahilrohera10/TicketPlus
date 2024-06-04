import { save,get_save,delete_save } from "../controllers/save.controller";

import express, { Router } from "express";
const user: Router = express.Router();

user.post("/", save);
user.get("/:user_id", get_save);
user.delete("/:user_id/:event_id", delete_save);

module.exports = user;
