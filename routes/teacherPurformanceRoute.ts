import { Router } from "express";
import { 
    getTeacherPerformance,
    deleteTeacherPerformance,
    createTeacherPerformance,
    updateTeacherPerformance, 
    getTeacherPurformanceById } from "../controllers/TeacherPerformanceController.js";
const teacherPurformanceRouter=Router();
teacherPurformanceRouter.get("/",getTeacherPerformance);
teacherPurformanceRouter.post("/create", createTeacherPerformance);
teacherPurformanceRouter.delete("/delete/:id", deleteTeacherPerformance);
teacherPurformanceRouter.patch("/update/:id", updateTeacherPerformance);
teacherPurformanceRouter.get("/:id", getTeacherPurformanceById);
export default teacherPurformanceRouter;
