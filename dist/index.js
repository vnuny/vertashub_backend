"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const auth_1 = __importDefault(require("./routes/auth/auth"));
const webhook_1 = __importDefault(require("./routes/webhooks/webhook"));
let PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(express.urlencoded({ extended: true }));
app.use("/auth", auth_1.default);
app.use("/webhook", webhook_1.default);
app.get("/", (req, res) => {
    res.json({ message: "working" });
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT} 👽`);
});
