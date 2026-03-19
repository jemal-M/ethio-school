import { Router } from "express";
import {  deleteStaff,getallStaff,postStaff,updateStaff } from "../controllers/StafController.js";
const staffRouter=Router();
 staffRouter.get("/",getallStaff);
 staffRouter.post("/create", postStaff);
 staffRouter.delete("/delete/:id", deleteStaff);
 staffRouter.patch("/update/:id", updateStaff);
 export default staffRouter;