import mongoose from "mongoose";
import { DB } from "../types/dbType/dbType";
import dbConfig from "./mongodb";

mongoose.Promise = global.Promise;

const db: DB = {
  mongoose,
  url: dbConfig.url,
};

export default db;
