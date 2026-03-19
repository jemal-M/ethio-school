import type { Request, Response, NextFunction } from "express";
import AcadamicYear from "../models/AcadamicYear.js";
 export const fetchAcadamicYears = (req:Request, res:Response, next:NextFunction) => {
    AcadamicYear.find()
        .then((acadamicYears) => {
            res.status(200).json({
                acadamicYears: acadamicYears
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const fetchAcadamicYear = (req:Request, res:Response, next:NextFunction) => {
    AcadamicYear.findById(req.params.id)
        .then((acadamicYear) => {
            res.status(200).json({
                acadamicYear: acadamicYear
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const createAcadamicYear = (req:Request, res:Response, next:NextFunction) => {
    const { name, startDate, endDate, isActive } = req.body;
    AcadamicYear.create({
          name: name,
        startDate: startDate,
        endDate: endDate,
        isActive: isActive
    })
        .then((result) => {
            res.status(201).json({
                message: "AcadamicYear created successfully",
                acadamicYear: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const updateAcadamicYear = (req:Request, res:Response, next:NextFunction) => {
    const { name, startDate, endDate, isActive } = req.body;
    AcadamicYear.findByIdAndUpdate(
        req.params.id,
        {
            name: name,
            startDate: startDate,
            endDate: endDate,
            isActive: isActive
        },
        { new: true }
    )
        .then((result) => {
            res.status(200).json({
                message: "AcadamicYear updated successfully",
                acadamicYear: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const deleteAcadamicYear = (req:Request, res:Response, next:NextFunction) => {
    AcadamicYear.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json({
                message: "AcadamicYear deleted successfully",
                acadamicYear: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
