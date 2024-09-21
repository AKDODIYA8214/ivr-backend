import { Request, Response } from "express";
import { getAllIvrService, getAllIvrPaginationService } from "../service/ivrService";
export const getAllIvr = async (req: Request, res: Response) => {
  try {
    const { limit, offset } = req.params;
    const data = limit && offset ? await getAllIvrPaginationService(limit, offset) : await getAllIvrService();
    res.json(data);
  } catch {
    res.status(500).json({ error: "Server Error" });
  }
};
