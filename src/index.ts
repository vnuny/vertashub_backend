import express from "express";
import "dotenv/config";
import cors from "cors";

let PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "working" });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} 👽`);
});
