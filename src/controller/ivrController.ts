import { Request, Response } from "express";
import { getAllIvrService, getAllIvrPaginationService } from "../service/ivrService";
export const getAllIvr = async (req: Request, res: Response) => {
  try {
    console.log("getAllIvr calling.....");
    const { limit, offset } = req.params;
    const data = limit && offset ? await getAllIvrPaginationService(limit, offset) : await getAllIvrService();
    console.log("getAllIvr called......");
    res.json(data);
  } catch (error) {
    console.log("getAllIvr error", error);
    res.status(500).json({ error: "Server Error" });
  }
};
