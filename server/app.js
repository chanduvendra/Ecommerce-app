import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import { errorMiddleware } from "./middlewares/error.js";

config({
    path: "./data/config.env",
});

export const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
        origin: [process.env.FRONTEND_URI_1, process.env.FRONTEND_URI_2],
    })
);

app.get("/", (req, res, next) => {
    res.send("Working");
});

// Importing Routers here
import order from "./routes/order.js";
import product from "./routes/product.js";
import user from "./routes/user.js";
app.use("/api/v1/user", user);
app.use("/api/v1/product", product);
app.use("/api/v1/order", order);


app.use(errorMiddleware);