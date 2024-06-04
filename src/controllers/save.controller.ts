import { Request, Response } from "express";
import { SAVE,GET_SAVE,DELETE_SAVE} from "../services/save.service";
const save_lists = require("../../db/models/save_lists");
export async function save(req: Request, res: Response) {
  try {
    const { user_id, event_id } = req.body;
    if (!user_id || !event_id) {
      return res.status(400).json({ error: "user_id and event_id are required" });
    }
    const save_data:any = await SAVE(user_id,event_id);

    return res.status(201).json({ msg: "New event saved", save_data });
  } catch (error) {
    console.log("error=>", error);
    return res.status(500).json({ msg: "Internal Server Error on saving an event", error });
  }
}

export async function get_save(req: Request, res: Response) {
  try {
    const user_id  = req.params.user_id;

    if (!user_id) {
      return res.status(400).json({ error: "user_id is required" });
    }

    const save_data = await GET_SAVE(user_id);

    return res.status(200).json({ msg: "Saved Event List", save_data });
  } catch (error) {
    console.log("error=>", error);
    return res.status(500).json({ msg: "Internal Server Error on getting event list", error });
  }
}

export async function delete_save(req: Request, res: Response) {
  try {
    const { user_id, event_id } = req.params;

    if (!user_id || !event_id) {
      return res.status(400).json({ error: "user_id and event_id are required" });
    }

    const result = await DELETE_SAVE(user_id,event_id);

    if (result === 0) {
      return res.status(404).json({ msg: "No event found for the given user_id and event_id" });
    }

    return res.status(200).json({ msg: "Event deleted for the given user_id and event_id" });
  } catch (error) {
    console.log("error=>", error);
    return res.status(500).json({ msg: "Internal Server Error on deleting event", error });
  }
}
