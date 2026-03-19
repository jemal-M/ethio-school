import { Router } from "express";
import { 
fetchMedicalrecords,
deleteMedicalrecord,
updateMedicalrecord,

createMedicalrecord,
    
     } from "../controllers/MedicalRecordController.js";
     const medicalRecordRouter=Router();
     medicalRecordRouter.get("/",fetchMedicalrecords);
     medicalRecordRouter.delete("/delete/:id", deleteMedicalrecord);
     medicalRecordRouter.put("/update/:id", updateMedicalrecord);
     medicalRecordRouter.post("/create",createMedicalrecord);
     export default medicalRecordRouter;