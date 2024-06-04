import { Worker } from "bullmq";
import { send } from "process";

const send_mail = () =>
  new Promise<void>((resolve, reject) => setTimeout(() => resolve(), 5 * 1000));

const worker = new Worker(
  "email-queue",
  async (job) => {
    console.log("A message recieved for job id => ", job.id);
    console.log("Processing Message and sending mail .............");
    await send_mail();
    console.log("Email sent ....");
  },
  {
    connection: {
      host: "localhost",
      port: 6379,
    },
  }
);
