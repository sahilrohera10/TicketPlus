import { createClient } from "redis";
require("dotenv").config({ path: `${process.cwd()}/.env` });

// Create a Redis client instance
export const client = createClient({
  url: process.env.REDIS_URL,
});

console.log("Running Redis file");

// Connect to the Redis server
client
  .connect()
  .then(() => {
    console.log("Redis client connected");
  })
  .catch((error) => {
    console.error("Redis connection error =>", error);
  });
