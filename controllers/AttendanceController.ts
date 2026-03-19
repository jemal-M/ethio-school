import Attendance from "../models/Attendance.js";
import mongoose, { type NextFunction,type Request,type Response } from "express";
import { Types } from "mongoose";

export const getAttendanceRecords = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const records = await Attendance.find().populate('student', 'name');
        res.json(records);
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};
export const createAttendanceRecord = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const record = new Attendance(req.body);
        const savedRecord = await record.save();
        res.status(201).json(savedRecord);
    } catch (error:any) {
        res.status(400).json({ message: error?.message });
    }
};
export const updateAttendanceRecord = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const { id } = req.params;
        const record = await Attendance.findByIdAndUpdate(id, req.body, { new: true });
        if (!record) {
            return res.status(404).json({ message: 'Record not found' });
        }
        res.json(record);
    } catch (error:any) {
        res.status(400).json({ message: error?.message });
    }
};
export const deleteAttendanceRecord = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const { id } = req.params;
        const record = await Attendance.findByIdAndDelete(id);
        if (!record) {
            return res.status(404).json({ message: 'Record not found' });
        }
        res.json({ message: 'Record deleted successfully' });
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};
export const getAttendanceByStudent = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const studentId = req.params.studentId as string | undefined;
        
        // Validate studentId is a valid ObjectId
        if (!studentId || !Types.ObjectId.isValid(studentId)) {
            return res.status(400).json({ message: 'Invalid student ID' });
        }
        
        const records = await Attendance.find({ student: new Types.ObjectId(studentId) }).populate('student', 'name');
        res.json(records);
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};
export const getAttendanceByDate = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const dateParam = req.params.date as string | undefined;
        
        // Validate date
        if (!dateParam) {
            return res.status(400).json({ message: 'Date parameter is required' });
        }
        
        const parsedDate = new Date(dateParam);
        if (isNaN(parsedDate.getTime())) {
            return res.status(400).json({ message: 'Invalid date format' });
        }
        
        const records = await Attendance.find({ date: parsedDate }).populate('student', 'name');
        res.json(records);
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};
export const getAttendanceByClass = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const classId = req.params.classId as string | undefined;
        
        // Validate classId is a valid ObjectId
        if (!classId || !Types.ObjectId.isValid(classId)) {
            return res.status(400).json({ message: 'Invalid class ID' });
        }
        
        const records = await Attendance.find({ class: new Types.ObjectId(classId) }).populate('student', 'name');
        res.json(records);
    } catch (error:any) {
        res.status(500).json({ message: error?.message });
    }
};