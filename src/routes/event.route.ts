import * as eventController from '../controllers/event.controller';
import express, { Router } from "express";
// const express = require("express").router()

const event: Router = express.Router();

event.post('/events', eventController.addEvent);
event.get('/events', eventController.getEvents);
event.get('/events/:id', eventController.getEventById);

module.exports = event
