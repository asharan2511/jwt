import express from "express";
import { connectDb } from "./config/db.js";
import router from "./routes/userRouter.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(cookieParser());
connectDb();

app.use("/api", router);
app.listen(3001, () => {
  console.log("server is running");
});
