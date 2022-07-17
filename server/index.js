import express from "express";
import dotenv from "dotenv";
import connection from "./database/db.js";
import router from "./routes/routes.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

const URL = "http://localhost:8000/";

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
const Port = process.env.PORT;
const db_url = process.env.MONGO_URI;
connection(db_url);

app.use("/", router);

app.listen(Port, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
