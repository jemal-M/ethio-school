import { Router } from "express";
import { getSystemLogs,createSystemLog,deleteSystemLog,updateSystemLog } from "../controllers/systemLogController.js";
 
     
const systemLogRouter=Router();
systemLogRouter.get("/",getSystemLogs);
systemLogRouter.post("/create", createSystemLog);
systemLogRouter.delete("/delete/:id", deleteSystemLog);
systemLogRouter.patch("/update/:id", updateSystemLog);
export default systemLogRouter;
