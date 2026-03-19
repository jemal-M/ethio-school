import StudentPerformance from "../models/StudentPerformance.js";
import type {Request,Response} from "express";
 export const createStudentPerformance=async(req:Request,res:Response)=>{
    try {
        const studentPerformance=await StudentPerformance.create(req.body);
        res.status(201).json({
            success:true,
            studentPerformance
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
};
export const getAllStudentPerformance=async(req:Request, res:Response)=>{
    try {
        const studentPerformances=await StudentPerformance.find()
        .populate("student")
        .populate("subject");
        res.status(200).json({
            success:true,
            studentPerformances
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
};
export const getSingleStudentPerformance=async(req:Request, res:Response)=>{
    try {
        const studentPerformance=await StudentPerformance.findById(req.params.id)
        .populate("student")
        .populate("subject");
        res.status(200).json({
            success:true,
            studentPerformance
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
};
export const updateStudentPerformance=async(req:Request, res:Response)=>{
    try {
        const studentPerformance=await StudentPerformance.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        })
        .populate("student")
        .populate("subject");
        res.status(200).json({
            success:true,
            studentPerformance
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
};
export const deleteStudentPerformance=async(req:Request, res:Response)=>{
    try {
        await StudentPerformance.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success:true,
            message:"student performance deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
};
