import { IEvent } from "../utils/interfaces";
const Event = require('../../db/models/events');

export async function ADD_EVENT(event: IEvent) {
  try {
    const newEvent = await Event.create(event);
    return newEvent;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function GET_EVENTS() {
  try {
    const events = await Event.findAll();
    return events;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function GET_EVENT_BY_ID(id: number) {
  try {
    const event = await Event.findByPk(id);
    return event;
  } catch (error: any) {
    throw new Error(error);
  }
}