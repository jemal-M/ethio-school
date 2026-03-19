import AuditLog from "../models/AuditLog.js";
import type { Request,Response,NextFunction } from "express";
export const getAuditLogs = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const logs = await AuditLog.find().populate('user', 'name email');
        res.json(logs);
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};
export const getAuditLogsByUser = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const { userId } = req.params;
        const logs = await AuditLog.find({ user: userId }).populate('user', 'name email');
        res.json(logs);
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};
export const getAuditLogsByDateRange = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const { startDate, endDate } = req.params;
        const logs = await AuditLog.find({
            timestamp: {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
            }
        }).populate('user', 'name email');
        res.json(logs);
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};
export const getAuditLogsByAction = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const { action } = req.params;
        const logs = await AuditLog.find({ action: action }).populate('user', 'name email');
        res.json(logs);
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};
export const getAuditLogsByResource = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const { resource } = req.params;
        const logs = await AuditLog.find({ resource: resource }).populate('user', 'name email');
        res.json(logs);
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};
export const getAuditLogsBySeverity = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const { severity } = req.params;
        const logs = await AuditLog.find({ severity: severity }).populate('user', 'name email');
        res.json(logs);
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};
export const getAuditLogsByIpAddress = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const { ipAddress } = req.params;
        const logs = await AuditLog.find({ ipAddress: ipAddress }).populate('user', 'name email');
        res.json(logs);
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};
export const getAuditLogsBySessionId = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const { sessionId } = req.params;
        const logs = await AuditLog.find({ sessionId: sessionId }).populate('user', 'name email');
        res.json(logs);
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};

export const getAuditLogsByUserAgent = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const { userAgent } = req.params;
        const logs = await AuditLog.find({ userAgent: userAgent }).populate('user', 'name email');
        res.json(logs);
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};
 