import { Request, Response } from "express";
import "dotenv/config";

export default function InstagramVerifyWebhook(req: Request, res: Response) {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (
    mode === "subscribe" &&
    token === (process.env.WEBHOOK_SECRET as string)
  ) {
    console.log("Webhook Verified!");
    res.status(200).send(challenge);
  } else {
    res.status(403).send("Forbidden");
  }
}
