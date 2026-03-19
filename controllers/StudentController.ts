import Student from "../models/Student.js";
import type { Request, Response } from "express";
export const fetchStudent = async (req:Request,res:Response) => {
    try {
        const students=await Student.find({});
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({message:error});
    }
};
export const createStudent =async (req:Request, res:Response) => {
    try {
        const student=await Student.create(req.body);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({message:error});
    }
};
export const deleteStudent =async (req:Request, res:Response) => {
    try {
        const {id}=req.params;
        const student=await Student.findByIdAndDelete(id);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({message:error});
    }
};
export const updateStudent =async (req:Request, res:Response) => {
    try {
        const {id}=req.params;
        const student=await Student.findByIdAndUpdate(id,req.body);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({message:error});
    }
};
