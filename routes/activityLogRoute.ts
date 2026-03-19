import { Router } from "express";
import {
    getAllActivityLogs,
    getUserActivityLogs,
    createActivityLog,
    getRecentActivityLogs, 
    deleteActivityLog,
   updateActivityLog
} from "../controllers/Activitylogcontroller.js";
const activityLogRouter=Router();
activityLogRouter.get("/",getAllActivityLogs);
activityLogRouter.get("/recent", getRecentActivityLogs);
activityLogRouter.get("/:userId", getUserActivityLogs);
activityLogRouter.post("/", createActivityLog);
activityLogRouter.put("/:id", updateActivityLog);
activityLogRouter.delete("/:id", deleteActivityLog);
export default activityLogRouter;