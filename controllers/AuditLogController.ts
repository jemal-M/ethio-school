import AuditLog from "../models/AuditLog.js";
import type { Request,Response,NextFunction } from "express";
import mongoose from "mongoose";

// Helper function to safely extract a string from params
const extractParam = (param: string | string[] | undefined): string | null => {
    if (!param) return null;
    if (Array.isArray(param)) {
        return param[0] ?? null;
    }
    return param;
};

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
        const userIdParam = extractParam(req.params.userId);
        if (!userIdParam) {
            return res.status(400).json({ message: 'Missing or invalid userId parameter' });
        }
        if (!mongoose.Types.ObjectId.isValid(userIdParam)) {
            return res.status(400).json({ message: 'Invalid userId format' });
        }
        const logs = await AuditLog.find({ user: new mongoose.Types.ObjectId(userIdParam) }).populate('user', 'name email');
        res.json(logs);
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};
export const getAuditLogsByDateRange = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const { startDate, endDate } = req.params;
        
        // Helper function to safely parse date from params
        const parseDate = (param: string | string[] | undefined): Date | null => {
            if (!param) return null;
            const dateStr = Array.isArray(param) ? (param[0] ?? undefined) : param;
            if (!dateStr) return null;
            const date = new Date(dateStr);
            return isNaN(date.getTime()) ? null : date;
        };
        
        const parsedStartDate = parseDate(startDate);
        const parsedEndDate = parseDate(endDate);
        
        if (!parsedStartDate || !parsedEndDate) {
            return res.status(400).json({ message: 'Invalid startDate or endDate parameter' });
        }
        
        const logs = await AuditLog.find({
            timestamp: {
                $gte: parsedStartDate,
                $lte: parsedEndDate
            }
        }).populate('user', 'name email');
        res.json(logs);
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};
export const getAuditLogsByAction = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const actionParam = extractParam(req.params.action);
        if (!actionParam) {
            return res.status(400).json({ message: 'Missing or invalid action parameter' });
        }
        const logs = await AuditLog.find({ action: actionParam }).populate('user', 'name email');
        res.json(logs);
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};
export const getAuditLogsByResource = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const resourceParam = extractParam(req.params.resource);
        if (!resourceParam) {
            return res.status(400).json({ message: 'Missing or invalid resource parameter' });
        }
        const logs = await AuditLog.find({ resource: resourceParam }).populate('user', 'name email');
        res.json(logs);
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};
export const getAuditLogsBySeverity = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const severityParam = extractParam(req.params.severity);
        if (!severityParam) {
            return res.status(400).json({ message: 'Missing or invalid severity parameter' });
        }
        const logs = await AuditLog.find({ severity: severityParam }).populate('user', 'name email');
        res.json(logs);
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};
export const getAuditLogsByIpAddress = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const ipAddressParam = extractParam(req.params.ipAddress);
        if (!ipAddressParam) {
            return res.status(400).json({ message: 'Missing or invalid ipAddress parameter' });
        }
        const logs = await AuditLog.find({ ipAddress: ipAddressParam }).populate('user', 'name email');
        res.json(logs);
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};
export const getAuditLogsBySessionId = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const sessionIdParam = extractParam(req.params.sessionId);
        if (!sessionIdParam) {
            return res.status(400).json({ message: 'Missing or invalid sessionId parameter' });
        }
        const logs = await AuditLog.find({ sessionId: sessionIdParam }).populate('user', 'name email');
        res.json(logs);
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};

export const getAuditLogsByUserAgent = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const userAgentParam = extractParam(req.params.userAgent);
        if (!userAgentParam) {
            return res.status(400).json({ message: 'Missing or invalid userAgent parameter' });
        }
        const logs = await AuditLog.find({ userAgent: userAgentParam }).populate('user', 'name email');
        res.json(logs);
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};
 