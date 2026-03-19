import ActivityLog from "../models/ActivityLog.js";
import mongoose from "mongoose";
import type { Request,Response } from "express";
export const getAllActivityLogs = async (req:Request, res:Response) => {
  try {
    const logs = await ActivityLog.find().populate('user', 'name email');
    res.json(logs);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
 
export const getUserActivityLogs = async (req:Request, res:Response) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }
    const logs = await ActivityLog.find({ user: new mongoose.Types.ObjectId(userId as string) }).populate('user', 'name email');
    res.json(logs);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getRecentActivityLogs = async (req:Request, res:Response) => {
  try {
    const logs = await ActivityLog.find()
      .sort({ timestamp: -1 })
      .limit(10)
      .populate('user', 'name email');
    res.json(logs);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
