import { Router } from "express";
import { 
    
    deleteStudentPerformance,
    createStudentPerformance,
    updateStudentPerformance, 
    getSingleStudentPerformance,
    getAllStudentPerformance
     } from "../controllers/StudentPurformancecontroller.js";
    const studentPurformanceRouter=Router();
    studentPurformanceRouter.get("/",getAllStudentPerformance);
    studentPurformanceRouter.post("/create", createStudentPerformance);
    studentPurformanceRouter.delete("/delete/:id", deleteStudentPerformance);
    studentPurformanceRouter.patch("/update/:id", updateStudentPerformance);
    studentPurformanceRouter.get("/:id", getSingleStudentPerformance);

export default studentPurformanceRouter;
