import type { Request, Response, NextFunction } from "express";
import Teacher from "../models/Teacher.js";

export const fetchTeachers = (req: Request, res: Response, next: NextFunction): void => {
    Teacher.find()
        .populate("user", "name email phone role")
        .then((teachers) => {
            res.status(200).json({
                teachers: teachers
            });
        })
        .catch((err: Error) => {
            next(err);
        });
};

export const fetchTeacher = (req: Request, res: Response, next: NextFunction): void => {
    Teacher.findById(req.params.id)
        .populate("user", "name email phone role")
        .then((teacher) => {
            if (!teacher) {
                const error = new Error("Teacher not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                teacher: teacher
            });
        })
        .catch((err: Error) => {
            next(err);
        });
};

export const createTeacher = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { user, subject, qualification, salary } = req.body;

    if (!user) {
        const error = new Error("User ID is required") as any;
        error.statusCode = 400;
        return next(error);
    }

    try {
        const result = await Teacher.create({
            user: user,
            subject: subject,
            qualification: qualification,
            salary: salary
        });

        res.status(201).json({
            message: "Teacher created successfully",
            teacher: result
        });
    } catch (err) {
        next(err);
    }
};

export const updateTeacher = (req: Request, res: Response, next: NextFunction): void => {
    const { subject, qualification, salary } = req.body;

    Teacher.findByIdAndUpdate(
        req.params.id,
        {
            subject: subject,
            qualification: qualification,
            salary: salary
        },
        { new: true }
    )
        .populate("user", "name email phone role")
        .then((result) => {
            if (!result) {
                const error = new Error("Teacher not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Teacher updated successfully",
                teacher: result
            });
        })
        .catch((err: Error) => {
            next(err);
        });
};

export const deleteTeacher = (req: Request, res: Response, next: NextFunction): void => {
    Teacher.findByIdAndDelete(req.params.id)
        .then((result) => {
            if (!result) {
                const error = new Error("Teacher not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Teacher deleted successfully",
                teacher: result
            });
        })
        .catch((err: Error) => {
            next(err);
        });
};
