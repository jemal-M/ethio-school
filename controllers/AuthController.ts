import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import type { Types } from "mongoose";
import User from "../models/User.js";
import type { Request, Response } from "express";

// Extend Request type to include user property
interface AuthRequest extends Request {
  user?: { id: string };
}

export const getMe =async(req:AuthRequest,res:Response)=>{
    try {
        const user=await User.findById(req.user?.id).select("-password");
        res.json(user);
    } catch (error) {
        res.status(500).json({message:"server error"});
    }
}
export const register =async(req:Request, res:Response)=>{
    const {name,email,password}=req.body;
    try {
        let user=await User.findOne({email});
        if (user) {
            return res.status(400).json({msg:"user already exists"});
        }
        
        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        user=await User.create({
            name,
            email,
            password: hashedPassword
        })
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.role,
            token:generateToken(user._id)
        })
    } catch (error) {
        res.status(500).json({message:"server error"});
    }
};
export const login = async (req:Request,res:Response)=>{
    const {email,password}=req.body;
    try {
        const user = await User.findOne({email}).select("+password");
        if (!user) {
            return res.status(400).json({msg:"invalid credentials"});
        }
        
        const isMatch = await user.comparePassword(password);
        if (isMatch) {
            res.json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.role,
                token:generateToken(user._id)
            })
        } else {
            res.status(400).json({msg:"invalid credentials"});
        }
    } catch (error) {
        res.status(500).json({message:"server error"});
    }
      
}

function generateToken(_id: Types.ObjectId) {
    return jwt.sign({ id: _id }, process.env.JWT_SECRET as string, {
        expiresIn: "30d",
    });
}

