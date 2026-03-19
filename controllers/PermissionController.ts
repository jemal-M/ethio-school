import type { NextFunction,Request,Response } from "express";
import Permission from "../models/Permission.js";
 export const fetchPermissions = (req:Request, res:Response, next:NextFunction) => {
    Permission.find()
        .then((permissions) => {
            res.status(200).json({
                permissions: permissions
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const fetchPermission = (req:Request, res:Response, next:NextFunction) => {
    Permission.findById(req.params.id)
        .then((permission) => {
            if (!permission) {
                const error = new Error("Permission not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                permission: permission
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const createPermission = (req:Request, res:Response, next:NextFunction) => {
    const { name, description } = req.body;
    const permission = new Permission({
        name: name,
        description: description
    });
    permission
        .save()
        .then((result) => {
            res.status(201).json({
                message: "Permission created successfully",
                permission: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const updatePermission = (req:Request, res:Response, next:NextFunction) => {
    const { name, description } = req.body;
    Permission.findByIdAndUpdate(
        req.params.id,
        {
            name: name,
            description: description
        },
        { new: true }
    )
        .then((result) => {
            if (!result) {
                const error = new Error("Permission not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Permission updated successfully",
                permission: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const deletePermission = (req:Request, res:Response, next:NextFunction) => {
    Permission.findByIdAndDelete(req.params.id)
        .then((result) => {
            if (!result) {
                const error = new Error("Permission not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Permission deleted successfully",
                permission: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const assignPermissionToRole = (req:Request, res:Response, next:NextFunction) => {
    const { roleId, permissionId } = req.body;
    Permission.findByIdAndUpdate(
        permissionId,
        {
            $addToSet: { roles: roleId }
        },
        { new: true }
    )
        .then((result) => {
            if (!result) {
                const error = new Error("Permission not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Permission assigned to role successfully",
                permission: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const unassignPermissionFromRole = (req:Request, res:Response, next:NextFunction) => {
    const { roleId, permissionId } = req.body;
    Permission.findByIdAndUpdate(
        permissionId,
        {
            $pull: { roles: roleId }
        },
        { new: true }
    )
        .then((result) => {
            if (!result) {
                const error = new Error("Permission not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Permission unassigned from role successfully",
                permission: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
