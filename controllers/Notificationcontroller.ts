import Notifiction from "../models/Notifiction.js";
import type { Request,Response } from "express";
export const getAllNotifications = async (req:Request, res:Response) => {
  try {
    const notifications = await Notifiction.find().populate('user', 'name email');
    res.json(notifications);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getNotificationById = async (req:Request, res:Response) => {
  try {
    const { id } = req.params;
    const notification = await Notifiction.findById(id).populate('user', 'name email');
    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    res.json(notification);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
 export const getNotificationsByUser = async (req:Request, res:Response) => {
  try {
    const { userId } = req.params;
    const notifications = await Notifiction.find({ user: userId }).populate('user', 'name email');
    res.json(notifications);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getUnreadNotifications = async (req:Request, res:Response) => {
  try {
    const notifications = await Notifiction.find({ read: false }).populate('user', 'name email');
    res.json(notifications);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const markNotificationAsRead = async (req:Request, res:Response) => {
  try {
    const { id } = req.params;
    const notification = await Notifiction.findByIdAndUpdate(
      id,
      { read: true },
      { new: true }
    ).populate('user', 'name email');
    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    res.json({ message: "Notification marked as read", notification });
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const markAllNotificationsAsRead = async (req:Request, res:Response) => {
  try {
    const notifications = await Notifiction.updateMany(
      { read: false },
      { read: true }
    ).populate('user', 'name email');
    res.json({ message: "All notifications marked as read", notifications });
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteNotification = async (req:Request, res:Response) => {
  try {
    const { id } = req.params;
    const notification = await Notifiction.findByIdAndDelete(id).populate('user', 'name email');
    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    res.json({ message: "Notification deleted", notification });
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const createNotification = async (req:Request, res:Response) => {
  try {
    const notification = new Notifiction(req.body);
    const savedNotification = await notification.save();
    res.status(201).json(savedNotification);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getNotificationsByType = async (req:Request, res:Response) => {
  try {
    const { type } = req.params;
    const notifications = await Notifiction.find({ type: type }).populate('user', 'name email');
    res.json(notifications);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getNotificationsByPriority = async (req:Request, res:Response) => {
  try {
    const { priority } = req.params;
    const notifications = await Notifiction.find({ priority: priority }).populate('user', 'name email');
    res.json(notifications);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getNotificationsByDateRange = async (req:Request, res:Response) => {
  try {
    const { startDate, endDate } = req.params;
    const notifications = await Notifiction.find({
      createdAt: {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      },
    }).populate('user', 'name email');
    res.json(notifications);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getNotificationsByStatus = async (req:Request, res:Response) => {
  try {
    const { status } = req.params;
    const notifications = await Notifiction.find({ status: status }).populate('user', 'name email');
    res.json(notifications);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getNotificationsBySeverity = async (req:Request, res:Response) => {
  try {
    const { severity } = req.params;
    const notifications = await Notifiction.find({ severity: severity }).populate('user', 'name email');
    res.json(notifications);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getNotificationsByIpAddress = async (req:Request, res:Response) => {
  try {
    const { ipAddress } = req.params;
    const notifications = await Notifiction.find({ ipAddress: ipAddress }).populate('user', 'name email');
    res.json(notifications);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getNotificationsBySessionId = async (req:Request, res:Response) => {
  try {
    const { sessionId } = req.params;
    const notifications = await Notifiction.find({ sessionId: sessionId }).populate('user', 'name email');
    res.json(notifications);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getNotificationsByUserAgent = async (req:Request, res:Response) => {
  try {
    const { userAgent } = req.params;
    const notifications = await Notifiction.find({ userAgent: userAgent }).populate('user', 'name email');
    res.json(notifications);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

