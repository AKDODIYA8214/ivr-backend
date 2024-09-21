import { Mongoose, Model } from "mongoose";

export interface DBConfig {
  url: string;
}

export interface DB {
  mongoose: Mongoose;
  url: string;
}
