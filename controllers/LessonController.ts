import Lesson from "../models/Lesson.js";
import mongoose, { type NextFunction,type Request,type Response } from "express";

export const fetchLessons = (req: Request, res: Response, next: NextFunction) => {
    Lesson.find()
        .populate("subject", "name description")
        .populate("teacher", "name email phone role")
        .then((lessons) => {
            res.status(200).json({
                lessons: lessons
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const createLesson = (req: Request, res: Response, next: NextFunction) => {
    const { topic, content, subject,  date } = req.body;
    const lesson = new Lesson({
        topic: topic,
        content: content,
        subject: subject,
        date:date
    });
    lesson
        .save()
        .then((result) => {
            res.status(201).json({
                message: "Lesson created successfully",
                lesson: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const getLessonById = (req: Request, res: Response, next: NextFunction) => {
    Lesson.findById(req.params.id)
        .populate("subject", "name description")
        .populate("teacher", "name email phone role")
        .then((lesson) => {
            if (!lesson) {
                const error = new Error("Lesson not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                lesson: lesson
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const updateLesson = (req: Request, res: Response, next: NextFunction) => {
    const { topic, content, subject,date } = req.body;
    Lesson.findByIdAndUpdate(
        req.params.id,
        {
            topic: topic,
            content: content,
            subject: subject,
            date:date
        },
        { new: true }
    )
        .populate("subject", "name description")
        .populate("teacher", "name email phone role")
        .then((result) => {
            if (!result) {
                const error = new Error("Lesson not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Lesson updated successfully",
                lesson: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const deleteLesson = (req: Request, res: Response, next: NextFunction) => {
    Lesson.findByIdAndDelete(req.params.id)
        .then((result) => {
            if (!result) {
                const error = new Error("Lesson not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Lesson deleted successfully",
                lesson: result
            });
        })
        .catch((err) => {
            next(err);
        });
};

