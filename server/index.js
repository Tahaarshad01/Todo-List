import express from "express";
import connection from "./database/connection.js";
import route from "./routes/route.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", route);
connection();
const port = 3000;
app.listen(port, () => {
  console.log(`server is running up ${port}`);
});
