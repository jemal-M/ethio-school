import Result from "../models/Result.js";
import type { NextFunction, Request, Response } from "express";
export const fetchResults = (req: Request, res: Response, next: NextFunction) => {
    Result.find()
        .populate("student", "name email phone role")
        .populate("subject", "name code credits")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((results) => {
            res.status(200).json({
                results: results
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const fetchResultById = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    Result.findById(id)
        .populate("student", "name email phone role")
        .populate("subject", "name code credits")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((result) => {
            if (!result) {
                const error = new Error("Result not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                result: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const updateResult = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { student, subject, academicYear, class: classId, score } = req.body;
    if (!id || Array.isArray(id)) {
        const error = new Error("Invalid result ID") as any;
        error.statusCode = 400;
        next(error);
        return;
    }
    Result.findByIdAndUpdate(
        id,
        {
            student,
            subject,
            academicYear,
            class: classId,
            score
        },
        { new: true }
    )
        .populate("student", "name email phone role")
        .populate("subject", "name code credits")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((result) => {
            if (!result) {
                const error = new Error("Result not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Result updated successfully",
                result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const deleteResult = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    if (!id || Array.isArray(id)) {
        const error = new Error("Invalid result ID") as any;
        error.statusCode = 400;
        next(error);
        return;
    }
    Result.findByIdAndDelete(id)
        .populate("student", "name email phone role")
        .populate("subject", "name code credits")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((result) => {
            if (!result) {
                const error = new Error("Result not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Result deleted successfully",
                result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const createResult = (req: Request, res: Response, next: NextFunction) => {
    const { student, subject, academicYear, class: classId, score } = req.body;
    const result = new Result({
        student,
        subject,
        academicYear,
        class: classId,
        score
    });
    result
        .save()
        .then((result) => {
            return result.populate("student", "name email phone role").execPopulate();
        })
        .then((result) => {
            return result.populate("subject", "name code credits").execPopulate();
        })
        .then((result) => {
            return result.populate("academicYear", "name startDate endDate").execPopulate();
        })
        .then((result) => {
            return result.populate("class", "name grade level").execPopulate();
        })
        .then((result) => {
            res.status(201).json({
                message: "Result created successfully",
                result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const fetchResultsByStudent = (req: Request, res: Response, next: NextFunction) => {
    const { studentId } = req.params;
    Result.find({ student: studentId })
        .populate("student", "name email phone role")
        .populate("subject", "name code credits")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((results) => {
            res.status(200).json({
                results
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const fetchResultsBySubject = (req: Request, res: Response, next: NextFunction) => {
    const { subjectId } = req.params;
    Result.find({ subject: subjectId })
        .populate("student", "name email phone role")
        .populate("subject", "name code credits")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((results) => {
            res.status(200).json({
                results
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const fetchResultsByAcademicYear = (req: Request, res: Response, next: NextFunction) => {
    const { academicYearId } = req.params;
    Result.find({ academicYear: academicYearId })
        .populate("student", "name email phone role")
        .populate("subject", "name code credits")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((results) => {
            res.status(200).json({
                results
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const fetchResultsByClass = (req: Request, res: Response, next: NextFunction) => {
    const { classId } = req.params;
    Result.find({ class: classId })
        .populate("student", "name email phone role")
        .populate("subject", "name code credits")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((results) => {
            res.status(200).json({
                results
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const fetchResultByStudentAndSubject = (req: Request, res: Response, next: NextFunction) => {
    const { studentId, subjectId } = req.params;
    Result.findOne({ student: studentId, subject: subjectId })
        .populate("student", "name email phone role")
        .populate("subject", "name code credits")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((result) => {
            if (!result) {
                const error = new Error("Result not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const fetchResultByStudentAndAcademicYear = (req: Request, res: Response, next: NextFunction) => {
    const { studentId, academicYearId } = req.params;
    Result.findOne({ student: studentId, academicYear: academicYearId })
        .populate("student", "name email phone role")
        .populate("subject", "name code credits")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((result) => {
            if (!result) {
                const error = new Error("Result not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const fetchResultByStudentAndClass = (req: Request, res: Response, next: NextFunction) => {
    const { studentId, classId } = req.params;
    Result.findOne({ student: studentId, class: classId })
        .populate("student", "name email phone role")
        .populate("subject", "name code credits")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((result) => {
            if (!result) {
                const error = new Error("Result not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const fetchResultByStudentAndSubjectAndAcademicYear = (req: Request, res: Response, next: NextFunction) => {
    const { studentId, subjectId, academicYearId } = req.params;
    Result.findOne({ student: studentId, subject: subjectId, academicYear: academicYearId })
        .populate("student", "name email phone role")
        .populate("subject", "name code credits")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((result) => {
            if (!result) {
                const error = new Error("Result not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const fetchResultByStudentAndSubjectAndClass = (req: Request, res: Response, next: NextFunction) => {
    const { studentId, subjectId, classId } = req.params;
    Result.findOne({ student: studentId, subject: subjectId, class: classId })
        .populate("student", "name email phone role")
        .populate("subject", "name code credits")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((result) => {
            if (!result) {
                const error = new Error("Result not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const fetchResultByStudentAndSubjectAndAcademicYearAndClass = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { studentId, subjectId, academicYearId, classId } = req.params;
    Result.findOne({ student: studentId, subject: subjectId, academicYear: academicYearId, class: classId })
        .populate("student", "name email phone role")
        .populate("subject", "name code credits")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((result) => {
            if (!result) {
                const error = new Error("Result not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const fetchResultById = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    Result.findById(id)
        .populate("student", "name email phone role")
        .populate("subject", "name code credits")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((result) => {
            if (!result) {
                const error = new Error("Result not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const updateResult = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { student, subject, academicYear, class: classId, score } = req.body;
    Result.findByIdAndUpdate(
        id,
        { student, subject, academicYear, class: classId, score },
        { new: true }
    )
        .populate("student", "name email phone role")
        .populate("subject", "name code credits")
        .populate("academicYear", "name startDate endDate")
        .populate("class", "name grade level")
        .then((result) => {
            if (!result) {
                const error = new Error("Result not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Result updated successfully",
                result
            });
        })
        .catch((err) => {
            next(err);
        });
};
