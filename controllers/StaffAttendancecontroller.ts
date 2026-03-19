import StaffAttendance from "../models/StaffAttendance.js";
import type { Request,Response } from "express";

export const getallStaffAttendance=async(req:Request,res:Response)=>{
    try {
        const StaffAttendance1=await StaffAttendance.find({})
        res.json(StaffAttendance1)
    } catch (error) {
        console.log(error)
    }
};
export const postStaffAttendance=async(req:Request, res:Response)=>{
    try {
        const StaffAttendance1=await StaffAttendance.create(req.body)
        res.json(StaffAttendance1)
    } catch (error) {
        console.log(error)
    }
};
export const deleteStaffAttendance=async(req:Request, res:Response)=>{
    try {
        const {id}=req.params
        const StaffAttendance1=await StaffAttendance.findByIdAndDelete(id)
        res.json({"message":"deleted successfully",})
    } catch (error) {
        console.log(error)
    }
};
export const updateStaffAttendance=async(req:Request, res:Response)=>{
    try {
        const {id}=req.params
        const StaffAttendance1=await StaffAttendance.findByIdAndUpdate(id,req.body)
        res.json(StaffAttendance1)
    } catch (error) {
        console.log(error)
    }
};
