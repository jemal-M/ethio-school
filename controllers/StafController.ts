import Staff from "../models/Staff.js";
import type { Request,Response } from "express";

export const getallStaff=async(req:Request,res:Response)=>{
    try {
        const Staff1=await Staff.find({})
        res.json(Staff1)
    } catch (error) {
        console.log(error)
    }
};
export const postStaff=async(req:Request, res:Response)=>{
    try {
        const Staff1=await Staff.create(req.body)
        res.json(Staff1)
    } catch (error) {
        console.log(error)
    }
};
export const deleteStaff=async(req:Request, res:Response)=>{
    try {
        const {id}=req.params
        const Staff1=await Staff.findByIdAndDelete(id)
        res.json({"message":"deleted successfully",})
    } catch (error) {
        console.log(error)
    }
};
export const updateStaff=async(req:Request, res:Response)=>{
    try {
        const {id}=req.params
        const Staff1=await Staff.findByIdAndUpdate(id,req.body)
        res.json(Staff1)
    } catch (error) {
        console.log(error)
    }
};
