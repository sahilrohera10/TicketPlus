import { Worker } from "bullmq";
import { send } from "process";
import IORedis from "ioredis";
require("dotenv").config({ path: `${process.cwd()}/.env` });

const send_mail = () =>
  new Promise<void>((resolve, reject) => setTimeout(() => resolve(), 5 * 1000));

console.log("bullmq=>", process.env.REDIS_BULLMQ_URL);
const connection = new IORedis(process.env.REDIS_BULLMQ_URL || "", {
  maxRetriesPerRequest: null,
});

const worker = new Worker(
  "email-queue",
  async (job) => {
    console.log("A message recieved for job id => ", job.id);
    console.log("Processing Message and sending mail .............");
    await send_mail();
    console.log("Email sent ....");
  },
  {
    connection,
  }
);
