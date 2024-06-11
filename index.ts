import express, { Express, Router } from "express";
import mongoose from "mongoose";
import financeRecordRouter from "./src/routes/finance-record";
import cors from "cors";
import config from "./config";

const app: Express = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://finance-tracker-srv.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const PORT = process.env.PORT || 3000;
const URI: string = config.DB_REMOTE;

mongoose
  .connect(URI)
  .then(() => console.log("CONNECTED SUCCESS"))
  .catch((err) => console.error("FAIL CONNECTION", err));

app.use("/finances-record", financeRecordRouter);

app.listen(PORT, () => {
  console.log(`Server Runing on Port ${PORT}`);
});
