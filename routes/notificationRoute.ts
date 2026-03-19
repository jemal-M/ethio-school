import { Router } from "express";
import { getAllNotifications,deleteNotification,markAllNotificationsAsRead,markNotificationAsRead } from "../controllers/Notificationcontroller.js";
const notificationRouter=Router();
 notificationRouter.get("/",getAllNotifications);
 notificationRouter.delete("/delete/:id", deleteNotification);
 notificationRouter.put("/mark-as-read/:id", markNotificationAsRead);
 notificationRouter.put("/mark-all-as-read", markAllNotificationsAsRead);
 export default notificationRouter;
