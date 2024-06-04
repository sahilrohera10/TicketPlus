import { save,get_save,delete_save } from "../controllers/save.controller";

import express, { Router } from "express";
// const express = require("express").router()
const user: Router = express.Router();

user.post("/save", save);
user.get("/get_save", get_save);
user.delete("/delete_save", delete_save);

module.exports = user;
