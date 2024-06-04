import { Request, Response } from "express";
const users = require("../../db/models/users");


export function register_user(req: Request, res: Response) {
  try {
    console.log("body=>", req.body);

    const { name, email, image } = req.body;

    console.log("model=>", users);

    if (!name || !email) {
      return res.status(400).json({ error: "Username and email are required" });
    }

    const user = users.create({
      name,
      email,
      image,
    });

    return res
      .status(201)
      .json({ msg: "New User registered successfully", user });
  } catch (error) {
    console.log("error=>", error);
    return res
      .status(500)
      .json({ msg: "Internal Server Error on registering the user", error });
  }
}
