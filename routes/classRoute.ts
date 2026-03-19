import { Router } from "express";
import { deleteClass, fetchClass, createClass, updateClass } from "../controllers/ClassController.js";
const classRouter = Router();
classRouter.get("/", fetchClass);
classRouter.post("/create",createClass);
classRouter.delete("/delete/:id", deleteClass);
classRouter.put("/update/:id", updateClass);
export default classRouter;