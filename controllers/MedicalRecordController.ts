import Medicalrecord from "../models/Medicalrecord.js";
import type { Request,Response ,NextFunction} from "express";
export const fetchMedicalrecords = (req:Request, res:Response, next:NextFunction) => {
    Medicalrecord.find()
        .populate("patient", "name email phone role")
        .then((medicalrecords) => {
            res.status(200).json({
                medicalrecords: medicalrecords
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const addMedicalrecord = (req:Request, res:Response, next:NextFunction) => {
    const { patient, diagnosis, treatment, prescription } = req.body;
    const medicalrecord = new Medicalrecord({
        patient: patient,
        diagnosis: diagnosis,
        treatment: treatment,
        prescription: prescription
    });
    medicalrecord
        .save()
        .then((result) => {
            res.status(201).json({
                message: "Medical record added successfully",
                medicalrecord: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const updateMedicalrecord = (req:Request, res:Response, next:NextFunction) => {
    const { patient, diagnosis, treatment, prescription } = req.body;
    Medicalrecord.findByIdAndUpdate(
        req.params.id,
        {
            patient: patient,
            diagnosis: diagnosis,
            treatment: treatment,
            prescription: prescription
        },
        { new: true }
    )
        .populate("patient", "name email phone role")
        .then((result) => {
            if (!result) {
                const error = new Error("Medical record not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Medical record updated successfully",
                medicalrecord: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const deleteMedicalrecord = (req:Request, res:Response, next:NextFunction) => {
    Medicalrecord.findByIdAndDelete(req.params.id)
        .populate("patient", "name email phone role")
        .then((result) => {
            if (!result) {
                const error = new Error("Medical record not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Medical record deleted successfully",
                medicalrecord: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const getMedicalrecordById = (req:Request, res:Response, next:NextFunction) => {
    Medicalrecord.findById(req.params.id)
        .populate("patient", "name email phone role")
        .then((result) => {
            if (!result) {
                const error = new Error("Medical record not found") as any;
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                medicalrecord: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const getMedicalrecordsByPatient = (req:Request, res:Response, next:NextFunction) => {
    const patientId = req.params.patientId;
    Medicalrecord.find({ patient: patientId })
        .populate("patient", "name email phone role")
        .then((result) => {
            res.status(200).json({
                medicalrecords: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const getMedicalrecordsByDiagnosis = (req:Request, res:Response, next:NextFunction) => {
    const diagnosis = req.params.diagnosis;
    Medicalrecord.find({ diagnosis: diagnosis })
        .populate("patient", "name email phone role")
        .then((result) => {
            res.status(200).json({
                medicalrecords: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const getMedicalrecordsByTreatment = (req:Request, res:Response, next:NextFunction) => {
    const treatment = req.params.treatment;
    Medicalrecord.find({ treatment: treatment })
        .populate("patient", "name email phone role")
        .then((result) => {
            res.status(200).json({
                medicalrecords: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
export const getMedicalrecordsByPrescription = (req:Request, res:Response, next:NextFunction) => {
    const prescription = req.params.prescription;
    Medicalrecord.find({ prescription: prescription })
        .populate("patient", "name email phone role")
        .then((result) => {
            res.status(200).json({
                medicalrecords: result
            });
        })
        .catch((err) => {
            next(err);
        });
};
