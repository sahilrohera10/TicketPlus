import { createClient } from "redis";
require("dotenv").config({ path: `${process.cwd()}/.env` });

// Create a Redis client instance
export const client = createClient({
  url: process.env.REDIS_URL,
  socket: {
    connectTimeout: 60000, // Increase the timeout to 60 seconds (adjust as needed)
  },
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
