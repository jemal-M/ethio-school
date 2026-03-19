import { Router } from "express";
import { 
    updatePayroll,
    generatePayroll
 } from "../controllers/PayrollController.js";
 
const payrollRouter = Router();
payrollRouter.put('/update/:id', updatePayroll);
payrollRouter.post('/generate/', generatePayroll);
export default payrollRouter;