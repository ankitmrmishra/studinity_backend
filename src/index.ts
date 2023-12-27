import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import { error, log } from "console";
import mongoose from "mongoose";

import router from "./routers";

const app = express();
app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  log("hello server");
});
const uri =
  "mongodb+srv://AnkitTheStudinity:pFrgUsdwGi0RCziP@cluster0.o5cw5xj.mongodb.net/?retryWrites=true&w=majority";
mongoose.Promise = Promise;
mongoose.connect(uri);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
