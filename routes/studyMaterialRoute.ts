import {Router} from "express";
import { 
    getAllStudyMaterials,
    createStudyMaterial,
    deleteStudyMaterial,
    updateStudyMaterial,
    getStudyMaterialById

 } from "../controllers/StudyMaterialController.js";

 const studyMaterialRoute=Router();
 studyMaterialRoute.get("/",getAllStudyMaterials);
 studyMaterialRoute.post("/create", createStudyMaterial);
 studyMaterialRoute.delete("/delete/:id", deleteStudyMaterial);
 studyMaterialRoute.patch("/update/:id", updateStudyMaterial);
 studyMaterialRoute.get("/:id", getStudyMaterialById);
  export default studyMaterialRoute;
