import type { NextFunction,Request,Response } from "express";
import Role from "../models/Role.js";
import Student from "../models/Student.js";
import Teacher from "../models/Teacher.js";
import Department from "../models/Department.js";
import User from "../models/User.js";
export const fetchRoles = (req:Request, res:Response, next:NextFunction) => {
    Role.find()
        .then((roles) => {
            res.status(200).json({
                roles: roles
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const createRole = (req:Request, res:Response, next:NextFunction) => {
    const { name, permissions } = req.body;
    Role.create({
        name: name,
        permissions: permissions
    })
        .then((role) => {
            res.status(201).json({
                message: "Role created successfully",
                role: role
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const deleteRole = (req:Request, res:Response, next:NextFunction) => {
    Role.findByIdAndDelete(req.params.id)
        .then((result) => {
            if (!result) {
                const error = new Error("Role not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Role deleted successfully",
                role: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const updateRole = (req:Request, res:Response, next:NextFunction) => {
    const { name, permissions } = req.body;
    Role.findByIdAndUpdate(
        req.params.id,
        {
            name: name,
            permissions: permissions
        },
        { new: true }
    )
        .then((result) => {
            if (!result) {
                const error = new Error("Role not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Role updated successfully",
                role: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const getRole = (req:Request, res:Response, next:NextFunction) => {
    Role.findById(req.params.id)
        .then((result) => {
            if (!result) {
                const error = new Error("Role not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                role: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const assignRole = (req:Request, res:Response, next:NextFunction) => {
    const { roleId, userId } = req.body;
    User.findByIdAndUpdate(userId, { role: roleId }, { new: true })
        .then((result) => {
            if (!result) {
                const error = new Error("User not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Role assigned successfully",
                user: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const unassignRole = (req:Request, res:Response, next:NextFunction) => {
    User.findByIdAndUpdate(req.params.userId, { role: null }, { new: true })
        .then((result) => {
            if (!result) {
                const error = new Error("User not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Role unassigned successfully",
                user: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const getUserRole = (req:Request, res:Response, next:NextFunction) => {
    User.findById(req.params.userId)
        .populate("role")
        .then((result) => {
            if (!result) {
                const error = new Error("User not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                role: result.role
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const getRolePermissions = (req:Request, res:Response, next:NextFunction) => {
    Role.findById(req.params.id)
        .then((result) => {
            if (!result) {
                const error = new Error("Role not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                permissions: result.permissions
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const hasPermission = (req:Request, res:Response, next:NextFunction) => {
    const { permission } = req.body;
    Role.findById(req.params.id)
        .then((result) => {
            if (!result) {
                const error = new Error("Role not found") as any;
                error.statusCode = 404;
                throw error;
            }
            if (result.permissions.includes(permission)) {
                next();
            } else {
                const error = new Error("Permission denied") as any;
                error.statusCode = 403;
                throw error;
            }
        })
        .catch((err) => {
            next(err);
        });
};
export const getRoleUsers = (req:Request, res:Response, next:NextFunction) => {
    const roleId = req.params.id;
    if (!roleId) {
        const error = new Error("Role ID is required") as any;
        error.statusCode = 400;
        return next(error);
    }
    
    User.find({ role: roleId as string })
        .then((result) => {
            res.status(200).json({
                users: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const getRoleDepartments = (req:Request, res:Response, next:NextFunction) => {
    const roleId = req.params.id;
    if (!roleId) {
        const error = new Error("Role ID is required") as any;
        error.statusCode = 400;
        return next(error);
    }
    
    // Note: Department model does not have a 'role' field.
    // This query may not return expected results.
    Department.find({ role: roleId as string })
        .then((result) => {
            res.status(200).json({
                departments: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const getRoleTeachers = (req:Request, res:Response, next:NextFunction) => {
    const roleId = req.params.id;
    if (!roleId) {
        const error = new Error("Role ID is required") as any;
        error.statusCode = 400;
        return next(error);
    }
    
    // Note: Teacher model does not have a 'role' field.
    // This query may not return expected results.
    Teacher.find({ role: roleId as string })
        .then((result) => {
            res.status(200).json({
                teachers: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const getRoleStudents = (req:Request, res:Response, next:NextFunction) => {
    const roleId = req.params.id;
    if (!roleId) {
        const error = new Error("Role ID is required") as any;
        error.statusCode = 400;
        return next(error);
    }
    
    // Note: Student model does not have a 'role' field.
    // This query may not return expected results.
    Student.find({ role: roleId as string })
        .then((result) => {
            res.status(200).json({
                students: result
            });
        })
        .catch((err) => {
            next(err);
        });
};