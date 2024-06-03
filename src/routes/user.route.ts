import { register_user } from "../controllers/user.controller";

import express, { Router } from "express";
// const express = require("express").router()
const user: Router = express.Router();

user.post("/register", register_user);

module.exports = user;
