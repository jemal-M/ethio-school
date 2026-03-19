import { Router } from "express";
import { getAllAssignments ,createAssignment,updateAssignment,getAssignmentsByStudent,getAssignmentsBySubject,getAssignmentsByClass
    
} from "../controllers/AssignmentController.js";

     
const assignmentSubmissionRouter=Router();
 assignmentSubmissionRouter.get("/",getAllAssignments);
 assignmentSubmissionRouter.post("/create", createAssignment);
 assignmentSubmissionRouter.get('/:class',getAssignmentsByClass);
 assignmentSubmissionRouter.get('/student/:id', getAssignmentsByStudent);
 assignmentSubmissionRouter.get("/:subject/:id", getAssignmentsBySubject);
 assignmentSubmissionRouter.put("/update/:id", updateAssignment);
 export default assignmentSubmissionRouter;