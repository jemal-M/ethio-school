import type { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import Class from "../models/Class.js";
export const fetchClasses = (req: Request, res: Response, next: NextFunction) => {
    Class.find()
        .then((classes) => {
            res.status(200).json({
                classes: classes
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const createClass = (req: Request, res: Response, next: NextFunction) => {
    const { name, section, acadamicYear } = req.body;
    const classData = {
        name: name,
        section: section,
        acadamicYear: acadamicYear ? new mongoose.Types.ObjectId(acadamicYear) : undefined
    };
    const className = new Class(classData);
    className
        .save()
        .then((result) => {
            res.status(201).json({
                message: "Class created successfully",
                class: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const fetchClass = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    Class.findById(id)
        .then((classDoc) => {
            if (!classDoc) {
                const error = new Error("Class not found");
                res.status(404).json({
                    error: error.message
                });
            }
            res.status(200).json({
                class: classDoc
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const updateClass = (req: Request, res: Response, next: NextFunction) => {
    const { name, section, acadamicYear } = req.body;
    Class.findByIdAndUpdate(
        req.params.id,
        {
            name: name,
            section: section,
            acadamicYear: acadamicYear ? new mongoose.Types.ObjectId(acadamicYear) : undefined
        },
        { new: true }
    )
        .then((result) => {
            res.status(200).json({
                message: "Class updated successfully",
                class: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const deleteClass = (req: Request, res: Response, next: NextFunction) => {
    Class.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json({
                message: "Class deleted successfully",
                class: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
 