import Department from "../models/Department.js";
import type { Request, Response, NextFunction } from "express";
export const fetchDepartments = (req:Request, res:Response, next:NextFunction) => {
    Department.find()
        .populate("hod", "name email phone role")
        .then((departments) => {
            res.status(200).json({
                departments: departments
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const createDepartment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, head } = req.body;
        const department = new Department({
            name: name,
            hod: head
        });
        const result = await department.save();
        res.status(201).json({
            message: "Department created successfully",
            department: result
        });
    } catch (err) {
        next(err);
    }
};
export const updateDepartment = (req: Request, res: Response, next: NextFunction) => {
    const { name, head } = req.body;
    Department.findByIdAndUpdate(
        req.params.id,
        {
            name: name,
            hod: head
        },
        { new: true }
    )
        .populate("hod", "name email phone role")
        .then((result) => {
            if (!result) {
                const error = new Error("Department not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Department updated successfully",
                department: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const deleteDepartment = (req: Request, res: Response, next: NextFunction) => {
    Department.findByIdAndDelete(req.params.id)
        .then((result) => {
            if (!result) {
                const error = new Error("Department not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Department deleted successfully",
                department: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const getDepartment = (req: Request, res: Response, next: NextFunction) => {
    Department.findById(req.params.id)
        .populate("hod", "name email phone role")
        .then((result) => {
            if (!result) {
                const error = new Error("Department not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                department: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const getTeachers = (req: Request, res: Response, next: NextFunction) => {
    Department.findById(req.params.id)
        .populate("hod", "name email phone role")
        .then((result) => {
            if (!result) {
                const error = new Error("Department not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                teachers: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const getStudents = (req: Request, res: Response, next: NextFunction) => {
    Department.findById(req.params.id)
        .populate("hod", "name email phone role")
        .then((result) => {
            if (!result) {
                const error = new Error("Department not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                students: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
