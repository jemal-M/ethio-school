import TeacherPerformance from "../models/TeacherPerformance.js";
import type { Request,Response } from "express";

export const getTeacherPerformance = async (req:Request,res:Response) => {
    try {
        const teacherPerformance = await TeacherPerformance.find();
        res.json(teacherPerformance);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
export const getTeacherPurformanceById=async(req:Request, res:Response)=>{
    try {
        const {id}=req.params;
        const teacherPerformance=await TeacherPerformance.findById(id);
        res.json(teacherPerformance);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
export const createTeacherPerformance = async (req:Request, res:Response) => {
    try {
        const teacherPerformance = await TeacherPerformance.create(req.body);
        res.json(teacherPerformance);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
export const updateTeacherPerformance = async (req:Request, res:Response) => {
    try {
        const {id}=req.params;
        const teacherPerformance = await TeacherPerformance.findByIdAndUpdate(id,req.body,{
            new:true
        });
        res.json(teacherPerformance);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
export const deleteTeacherPerformance = async (req:Request, res:Response) => {
    try {
        const {id}=req.params;
        await TeacherPerformance.findByIdAndDelete(id);
        res.json({ message: 'Teacher Performance deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};