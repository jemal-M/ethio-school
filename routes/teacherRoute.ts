import { Router } from "express";
import { fetchTeacher,createTeacher,deleteTeacher,updateTeacher } from "../controllers/TeacherController.js";

const teacherRouter=Router();
teacherRouter.get("/",fetchTeacher);
teacherRouter.post("/create", createTeacher);
teacherRouter.delete("/delete/:id", deleteTeacher);
teacherRouter.patch("/update/:id", updateTeacher);
export default teacherRouter;