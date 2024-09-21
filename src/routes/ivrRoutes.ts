import express from "express";
import { getAllIvr } from "../controller/ivrController";
const app = express();

app.get("/allivr", getAllIvr);

export default app;
