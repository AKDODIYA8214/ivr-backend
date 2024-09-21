import express from "express";
import { getAllIvr } from "../controller/ivrController";
const app = express();

app.get("/allivr");

export default app;
