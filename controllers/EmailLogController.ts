import EmailLog from "../models/EmailLog.js";
import type { Request,Response,NextFunction } from "express";
export const getAllEmailLogs = async (req:Request, res:Response) => {
  try {
    const logs = await EmailLog.find().populate('user', 'name email');
    res.json(logs);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getEmailLogsByUserId = async (req:Request, res:Response) => {
  try {
    const { userId } = req.params;
    const logs = await EmailLog.find({ user: userId }).populate('user', 'name email');
    res.json(logs);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getEmailLogsBySubject = async (req:Request, res:Response) => {
  try {
    const { subject } = req.params;
    const logs = await EmailLog.find({ subject: subject }).populate('user', 'name email');
    res.json(logs);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getEmailLogsByStatus = async (req:Request, res:Response) => {
  try {
    const { status } = req.params;
    const logs = await EmailLog.find({ status: status }).populate('user', 'name email');
    res.json(logs);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getEmailLogsByTimestamp = async (req:Request, res:Response) => {
  try {
    const { timestamp } = req.params;
    const logs = await EmailLog.find({ timestamp: timestamp }).populate('user', 'name email');
    res.json(logs);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getEmailLogsByRecipient = async (req:Request, res:Response) => {
  try {
    const { recipient } = req.params;
    const logs = await EmailLog.find({ recipient: recipient }).populate('user', 'name email');
    res.json(logs);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getEmailLogsByPriority = async (req:Request, res:Response) => {
  try {
    const { priority } = req.params;
    const logs = await EmailLog.find({ priority: priority }).populate('user', 'name email');
    res.json(logs);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getEmailLogsByService = async (req:Request, res:Response) => {
  try {
    const { service } = req.params;
    const logs = await EmailLog.find({ service: service }).populate('user', 'name email');
    res.json(logs);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getEmailLogsByProvider = async (req:Request, res:Response) => {
  try {
    const { provider } = req.params;
    const logs = await EmailLog.find({ provider: provider }).populate('user', 'name email');
    res.json(logs);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getEmailLogsByCategory = async (req:Request, res:Response) => {
  try {
    const { category } = req.params;
    const logs = await EmailLog.find({ category: category }).populate('user', 'name email');
    res.json(logs);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getEmailLogsByIp = async (req:Request, res:Response) => {
  try {
    const { ip } = req.params;
    const logs = await EmailLog.find({ ip: ip }).populate('user', 'name email');
    res.json(logs);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getEmailLogsByUserAgent = async (req:Request, res:Response) => {
  try {
    const { userAgent } = req.params;
    const logs = await EmailLog.find({ userAgent: userAgent }).populate('user', 'name email');
    res.json(logs);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};


