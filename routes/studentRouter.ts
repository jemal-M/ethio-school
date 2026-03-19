import { Router } from "express";
import { createStudent, deleteStudent, fetchStudent, updateStudent } from "../controllers/StudentController.js";

const studentRouter = Router();
studentRouter.get("/", fetchStudent);
studentRouter.post("/create", createStudent);
studentRouter.delete("/delete/:id", deleteStudent);
studentRouter.patch("/update/:id", updateStudent);

export default studentRouter;
