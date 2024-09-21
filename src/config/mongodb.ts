import { DBConfig } from "../types/dbType/dbType";

const mongoconfig: DBConfig = {
  url: process.env.MONGOCONFIG || "mongodb://localhost",
};

export default mongoconfig;
