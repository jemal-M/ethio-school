import type { Request, Response, NextFunction } from "express";
import Subject from "../models/Subject.js";
export const fetchSubjects = (req:Request, res:Response, next:NextFunction) => {
    Subject.find()
        .populate("teacher", "name email phone role")
        .then((subjects) => {
            res.status(200).json({
                subjects: subjects
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const createSubject = (req: Request, res: Response, next: NextFunction): void => {
    const { name, description, teacher } = req.body;
    const subject = new Subject({
        name: name,
        description: description,
        teacher: teacher
    });
    subject
        .save()
        .then((result) => {
            res.status(201).json({
                message: "Subject created successfully",
                subject: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const getSubjectById = (req: Request, res: Response, next: NextFunction): void => {
    Subject.findById(req.params.id)
        .populate("teacher", "name email phone role")
        .then((subject) => {
            if (!subject) {
                const error = new Error("Subject not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                subject: subject
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const updateSubject = (req: Request, res: Response, next: NextFunction): void => {
    const { name, description, teacher } = req.body;
    Subject.findByIdAndUpdate(
        req.params.id,
        {
            name: name,
            description: description,
            teacher: teacher
        },
        { new: true }
    )
        .populate("teacher", "name email phone role")
        .then((result) => {
            if (!result) {
                const error = new Error("Subject not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Subject updated successfully",
                subject: result
            });
        })
        .catch((err) => {
            next(err);
        });
};

export const deleteSubject = (req: Request, res: Response, next: NextFunction): void => {
    Subject.findByIdAndDelete(req.params.id)
        .then((result) => {
            if (!result) {
                const error = new Error("Subject not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Subject deleted successfully",
                subject: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
