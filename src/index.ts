import express from "express";
import "dotenv/config";
import cors from "cors";
import AuthRouter from "./routes/auth/auth";
import WebhookRouter from "./routes/webhooks/webhook";

let PORT = process.env.PORT;

const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/auth", AuthRouter);
app.use("/webhook", WebhookRouter);

app.get("/", (req, res) => {
  res.json({ message: "working" });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} 👽`);
});
