import { Router } from "express";
import { createSubject, deleteSubject, fetchSubjects, updateSubject } from "../controllers/Subjectcontroller.js";
const subjectRouter=Router();
subjectRouter.get("/",fetchSubjects);
subjectRouter.post("/create", createSubject);
subjectRouter.delete("/delete/:id", deleteSubject);
subjectRouter.patch("/update/:id", updateSubject);
export default subjectRouter;