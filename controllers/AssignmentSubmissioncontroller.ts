import AssignmentSubmssion from "../models/AssignmentSubmssion.js";
import type { NextFunction, Request, Response } from "express";
export const getAllAssignmentSubmissions = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const submissions = await AssignmentSubmssion.find().populate('assignment', 'title').populate('student', 'name');
        res.json(submissions);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
 
export const getAssignmentSubmissionById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const submission = await AssignmentSubmssion.findById(req.params.id).populate('assignment', 'title').populate('student', 'name');
        if (!submission) {
            return res.status(404).json({ message: 'Submission not found' });
        }
        res.json(submission);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const createAssignmentSubmission = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const submission = new AssignmentSubmssion({
            ...req.body,
        });
        const newSubmission = await submission.save();
        res.status(201).json(newSubmission);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const updateAssignmentSubmission = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const submission = await AssignmentSubmssion.findByIdAndUpdate(id, req.body, { new: true }).populate('assignment', 'title').populate('student', 'name');
        if (!submission) {
            return res.status(404).json({ message: 'Submission not found' });
        }
        res.json(submission);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const deleteAssignmentSubmission = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const submission = await AssignmentSubmssion.findByIdAndDelete(id);
        if (!submission) {
            return res.status(404).json({ message: 'Submission not found' });
        }
        res.json({ message: 'Submission deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const getAssignmentSubmissionByAssignment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { assignmentId } = req.params;
        if (!assignmentId) {
            return res.status(400).json({ message: 'Assignment ID is required' });
        }
        const submissions = await AssignmentSubmssion.find({ assignment: assignmentId }).populate('assignment', 'title').populate('student', 'name');
        res.json(submissions);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const getAssignmentSubmissionByStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { studentId } = req.params;
        if (!studentId) {
            return res.status(400).json({ message: 'Student ID is required' });
        }
        const submissions = await AssignmentSubmssion.find({ student: studentId }).populate('assignment', 'title').populate('student', 'name');
        res.json(submissions);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const getAssignmentSubmissionByDate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { date } = req.params;
        if (!date) {
            return res.status(400).json({ message: 'Date is required' });
        }
        const submissions = await AssignmentSubmssion.find({ submissionDate: date }).populate('assignment', 'title').populate('student', 'name');
        res.json(submissions);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const getAssignmentSubmissionByStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { status } = req.params;
        if (!status) {
            return res.status(400).json({ message: 'Status is required' });
        }
        const submissions = await AssignmentSubmssion.find({ status: status }).populate('assignment', 'title').populate('student', 'name');
        res.json(submissions);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
