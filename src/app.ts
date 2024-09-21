import express from "express";
import cors from "cors";
import { config } from "dotenv";
config();
import db from "./config/mongoose";
import ivrRoutes from "./routes/ivrRoutes";

const PORT = process.env.PORT || "3001";
console.log("dburl", db.url);
db.mongoose
  .connect(db.url)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", ivrRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
