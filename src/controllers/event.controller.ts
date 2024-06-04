import { Request, Response } from 'express';
import * as eventService from '../services/event.service';
import { IEvent } from '../utils/interfaces';


export async function addEvent(req: Request, res: Response) {
  try {
    const Body: IEvent = req.body;
    const event = await eventService.ADD_EVENT(Body);

    return res.status(201).json({ msg: 'Event added successfully', event });
  } catch (err) {
    console.error('Error adding event =>', err);
    return res.status(500).json({ msg: 'Internal server error', error: err });
  }
}


export async function getEvents(req: Request, res: Response) {
  try {
    const events = await eventService.GET_EVENTS();
    return res.status(200).json({ events });
  } catch (err) {
    console.error('Error getting events =>', err);
    return res.status(500).json({ msg: 'Internal server error', error: err });
  }
}

export async function getEventById(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    const event = await eventService.GET_EVENT_BY_ID(id);
    if (!event) return res.status(404).json({ msg: 'Event not found' });

    return res.status(200).json({ event });
  } catch (err) {
    console.error('Error getting event =>', err);
    return res.status(500).json({ msg: 'Internal server error', error: err });
  }
}
