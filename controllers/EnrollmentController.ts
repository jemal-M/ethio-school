import type { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Enrollment from "../models/Enrollment.js";

export const fetchEnrollments = (req: Request, res: Response, next: NextFunction): void => {
    Enrollment.find()
        .populate("student", "name email phone role")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((enrollments) => {
            res.status(200).json({
                enrollments: enrollments
            });
        })
        .catch((err) => {
            next(err);
        });
};

export const createEnrollment = (req: Request, res: Response, next: NextFunction): void => {
    const { student, academicYear, class: classId } = req.body;
    const enrollment = new Enrollment({
        student: student,
        academicYear: academicYear,
        class: classId
    });
    enrollment
        .save()
        .then((result) => {
            res.status(201).json({
                message: "Enrollment created successfully",
                enrollment: result
            });
        })
        .catch((err) => {
            next(err);
        });
};

export const getEnrollmentById = (req: Request, res: Response, next: NextFunction): void => {
    const { id } = req.params;
    if (!id || Array.isArray(id)) {
        const error = new Error("Invalid enrollment ID") as any;
        error.statusCode = 400;
        next(error);
        return;
    }
    Enrollment.findById(new mongoose.Types.ObjectId(id))
        .populate("student", "name email phone role")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((enrollment) => {
            if (!enrollment) {
                const error = new Error("Enrollment not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                enrollment: enrollment
            });
        })
        .catch((err) => {
            next(err);
        });
};

export const updateEnrollment = (req: Request, res: Response, next: NextFunction): void => {
    const { id } = req.params;
    const { student, academicYear, class: classId } = req.body;
    if (!id || Array.isArray(id)) {
        const error = new Error("Invalid enrollment ID") as any;
        error.statusCode = 400;
        next(error);
        return;
    }
    Enrollment.findByIdAndUpdate(
        new mongoose.Types.ObjectId(id),
        {
            student: student,
            academicYear: academicYear,
            class: classId
        },
        { new: true }
    )
        .populate("student", "name email phone role")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((result) => {
            if (!result) {
                const error = new Error("Enrollment not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Enrollment updated successfully",
                enrollment: result
            });
        })
        .catch((err) => {
            next(err);
        });
};

export const deleteEnrollment = (req: Request, res: Response, next: NextFunction): void => {
    const { id } = req.params;
    if (!id || Array.isArray(id)) {
        const error = new Error("Invalid enrollment ID") as any;
        error.statusCode = 400;
        next(error);
        return;
    }
    Enrollment.findByIdAndDelete(new mongoose.Types.ObjectId(id))
        .populate("student", "name email phone role")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((result) => {
            if (!result) {
                const error = new Error("Enrollment not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Enrollment deleted successfully",
                enrollment: result
            });
        })
        .catch((err) => {
            next(err);
        });
};

export const getEnrollmentsByStudent = (req: Request, res: Response, next: NextFunction): void => {
    const { studentId } = req.params;
    if (!studentId || Array.isArray(studentId)) {
        const error = new Error("Invalid student ID") as any;
        error.statusCode = 400;
        next(error);
        return;
    }
    Enrollment.find({ student: new mongoose.Types.ObjectId(studentId) })
        .populate("student", "name email phone role")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((enrollments) => {
            res.status(200).json({
                enrollments: enrollments
            });
        })
        .catch((err) => {
            next(err);
        });
};

export const getEnrollmentsByClass = (req: Request, res: Response, next: NextFunction): void => {
    const { classId } = req.params;
    if (!classId || Array.isArray(classId)) {
        const error = new Error("Invalid class ID") as any;
        error.statusCode = 400;
        next(error);
        return;
    }
    Enrollment.find({ class: new mongoose.Types.ObjectId(classId) })
        .populate("student", "name email phone role")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((enrollments) => {
            res.status(200).json({
                enrollments: enrollments
            });
        })
        .catch((err) => {
            next(err);
        });
};

export const getEnrollmentsByAcademicYear = (req: Request, res: Response, next: NextFunction): void => {
    const { academicYearId } = req.params;
    if (!academicYearId || Array.isArray(academicYearId)) {
        const error = new Error("Invalid academic year ID") as any;
        error.statusCode = 400;
        next(error);
        return;
    }
    Enrollment.find({ academicYear: new mongoose.Types.ObjectId(academicYearId) })
        .populate("student", "name email phone role")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((enrollments) => {
            res.status(200).json({
                enrollments: enrollments
            });
        })
        .catch((err) => {
            next(err);
        });
};
