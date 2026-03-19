import { Router } from "express";
import { createStudyMaterial, getAllStudyMaterials,deleteStudyMaterial,updateStudyMaterial } from "../controllers/StudyMaterialController.js";
const studentMaterialroute = Router();
studentMaterialroute.get("/",getAllStudyMaterials);
studentMaterialroute.post("/create",createStudyMaterial);
studentMaterialroute.delete("/delete/:id", deleteStudyMaterial);
studentMaterialroute.patch("/update/:id", updateStudyMaterial);

export default studentMaterialroute;