import StudyMaterial from "../models/StudyMaterial.js";
import type { Request,Response } from "express";
export const getAllStudyMaterials = async (req:Request, res:Response) => {
  try {
    const materials = await StudyMaterial.find();
    res.json(materials);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getStudyMaterialById = async (req:Request, res:Response) => {
  try {
    const material = await StudyMaterial.findById(req.params.id);
    if (!material) {
      return res.status(404).json({ message: 'Study material not found' });
    }
    res.json(material);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const createStudyMaterial = async (req:Request, res:Response) => {
  try {
    const material = new StudyMaterial(req.body);
    const savedMaterial = await material.save();
    res.status(201).json(savedMaterial);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};
export const updateStudyMaterial = async (req:Request, res:Response) => {
  try {
    const material = await StudyMaterial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!material) {
      return res.status(404).json({ message: 'Study material not found' });
    }
    res.json(material);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};
export const deleteStudyMaterial = async (req:Request, res:Response) => {
  try {
    const material = await StudyMaterial.findByIdAndDelete(req.params.id);
    if (!material) {
      return res.status(404).json({ message: 'Study material not found' });
    }
    res.json({ message: 'Study material deleted successfully' });
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getStudyMaterialBySubject = async (req:Request, res:Response) => {
  try {
    const { subject } = req.params;
    const materials = await StudyMaterial.find({ subject });
    res.json(materials);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getStudyMaterialByGrade = async (req:Request, res:Response) => {
  try {
    const { grade } = req.params;
    const materials = await StudyMaterial.find({ grade });
    res.json(materials);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getStudyMaterialByTeacher = async (req:Request, res:Response) => {
  try {
    const { teacher } = req.params;
    const materials = await StudyMaterial.find({ teacher });
    res.json(materials);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getStudyMaterialByCategory = async (req:Request, res:Response) => {
  try {
    const { category } = req.params;
    const materials = await StudyMaterial.find({ category });
    res.json(materials);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};




