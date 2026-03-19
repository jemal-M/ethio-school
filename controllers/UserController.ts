import type { Request, Response, NextFunction } from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const fetchUsers = (req: Request, res: Response, next: NextFunction): void => {
    User.find()
        .then((users) => {
            res.status(200).json({
                users: users
            });
        })
        .catch((err: Error) => {
            next(err);
        });
};
export const fetchUser = (req: Request, res: Response, next: NextFunction): void => {
    User.findById(req.params.id)
        .then((user) => {
            if (!user) {
                const error = new Error("User not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                user: user
            });
        })
        .catch((err: Error) => {
            next(err);
        });
};
export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { name, email, role, password } = req.body;
    
    if (!password) {
        const error = new Error("Password is required") as any;
        error.statusCode = 400;
        return next(error);
    }
    
    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        
        const result = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
            role: role
        });
        
        res.status(201).json({
            message: "User created successfully",
            user: result
        });
    } catch (err) {
        next(err);
    }
};
export const updateUser = (req: Request, res: Response, next: NextFunction): void => {
    const { name, email, phone, role } = req.body;
    User.findByIdAndUpdate(
        req.params.id,
        {
            name: name,
            email: email,
            phone: phone,
            role: role
        },
        { new: true }
    )
        .then((result) => {
            res.status(200).json({
                message: "User updated successfully",
                user: result
            });
        })
        .catch((err: Error) => {
            next(err);
        });
};
export const deleteUser = (req: Request, res: Response, next: NextFunction): void => {
    User.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json({
                message: "User deleted successfully",
                user: result
            });
        })
        .catch((err: Error) => {
            next(err);
        });
};
