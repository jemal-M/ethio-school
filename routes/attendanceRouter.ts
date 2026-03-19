import { Router } from "express";
import { 
    createAttendanceRecord,
    getAttendanceRecords,
    deleteAttendanceRecord,
    updateAttendanceRecord
  
     } from "../controllers/AttendanceController.js";
     
const attendanceRouter=Router();
attendanceRouter.get("/",getAttendanceRecords);
attendanceRouter.post("/create", createAttendanceRecord);
attendanceRouter.delete("/delete/:id", deleteAttendanceRecord);
attendanceRouter.patch("/update/:id", updateAttendanceRecord);
export default attendanceRouter;
