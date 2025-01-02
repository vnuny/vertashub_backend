import { Router } from "express";
import InstagramVerifyWebhook from "./instagram/handler";

const WebhookRouter = Router();

WebhookRouter.get("/instagram", InstagramVerifyWebhook);

export default WebhookRouter;
