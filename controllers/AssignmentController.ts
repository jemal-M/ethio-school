import Assignment from "../models/Assignment.js";
import mongoose from "mongoose";
import type { NextFunction, Request, Response } from "express";

export const getAllAssignments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const assignments = await Assignment.find()
      .populate("class")
      .populate("subject")
      .populate("createdBy");
    res.json(assignments);
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
};
export const getAssignmentById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const assignment = await Assignment.findById(req.params.id)
      .populate("class")
      .populate("subject")
      .populate("createdBy");
    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }
    res.json(assignment);
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
};
export const getAssignmentsByClass = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { classId } = req.params;
    if (!classId) {
      return res.status(400).json({ message: "Class ID is required" });
    }
    const assignments = await Assignment.find({ class: new mongoose.Types.ObjectId(classId) })
      .populate("class")
      .populate("subject")
      .populate("createdBy");
    res.json(assignments);
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
};
export const getAssignmentsBySubject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { subjectId } = req.params;
    if (!subjectId) {
      return res.status(400).json({ message: "Subject ID is required" });
    }
    const assignments = await Assignment.find({ subject: new mongoose.Types.ObjectId(subjectId) })
      .populate("class")
      .populate("subject")
      .populate("createdBy");
    res.json(assignments);
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
};
export const getAssignmentsByStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req.params;
    if (!studentId) {
      return res.status(400).json({ message: "Student ID is required" });
    }
    const assignments = await Assignment.find({
      "submittedBy.student": new mongoose.Types.ObjectId(studentId),
    })
      .populate("class")
      .populate("subject")
      .populate("createdBy");
    res.json(assignments);
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
};
export const createAssignment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const assignment = new Assignment({
      ...req.body,
    });
    const newAssignment = await assignment.save();
    res.status(201).json(newAssignment);
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
};
export const updateAssignment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Assignment ID is required" });
    }
    const assignment = await Assignment.findByIdAndUpdate(
      new mongoose.Types.ObjectId(id),
      req.body,
      { new: true }
    )
      .populate("class")
      .populate("subject")
      .populate("createdBy");
    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }
    res.json(assignment);
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
};
