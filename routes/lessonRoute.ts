import { Router } from "express";
import { 
    createLesson,
    fetchLessons,
    deleteLesson,
    updateLesson
    
     } from "../controllers/LessonController.js";
     
const lessonRouter=Router();
lessonRouter.get("/",fetchLessons);
lessonRouter.post("/create", createLesson);
lessonRouter.delete("/delete/:id", deleteLesson);
lessonRouter.patch("/update/:id", updateLesson);
export default lessonRouter;