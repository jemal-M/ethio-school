import Payroll from "../models/Payroll.js";
import type { Request, Response, NextFunction } from "express";
export const generatePayroll = (req: Request, res: Response, next: NextFunction) => {
    // Implementation for generating payroll
    const { employeeId, amount, date } = req.body;
    const payroll = new Payroll({
        employeeId,
        amount,
        date
    });
    res.status(200).json({ message: "Payroll generated successfully" });
};
export const getPayroll = (req: Request, res: Response, next: NextFunction) => {
    // Implementation for getting payroll
   const parolls=  Payroll.find();
    res.status(200).json({ message: "Payroll retrieved successfully",'parolls':parolls });
};
export const updatePayroll = (req: Request, res: Response, next: NextFunction) => {
    // Implementation for updating payroll
    const { employeeId, amount, date } = req.body;
    Payroll.findByIdAndUpdate(req.params.id, {
        employeeId,
        amount,
        date
    }, { new: true });
    res.status(200).json({ message: "Payroll updated successfully" });
};