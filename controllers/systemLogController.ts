import SystemLog from "../models/SystemLog.js";
import type { Request, Response } from "express";

export const getSystemLogs = async (req: Request, res: Response) => {
    try {
        const systemLogs = await SystemLog.find().populate('user', 'name email');
        res.json(systemLogs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
export const createSystemLog = async (req: Request, res: Response) => {
    try {
        const systemLog = await SystemLog.create(req.body);
        res.status(201).json(systemLog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
export const deleteSystemLog = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const systemLog = await SystemLog.findByIdAndDelete(id);
        if (!systemLog) {
            return res.status(404).json({ message: 'System Log not found' });
        }
        res.json({ message: 'System Log deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
export const updateSystemLog = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const systemLog = await SystemLog.findByIdAndUpdate(id, req.body, { new: true });
        if (!systemLog) {
            return res.status(404).json({ message: 'System Log not found' });
        }
        res.json(systemLog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};