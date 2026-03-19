import { Router } from "express";
import { createAcadamicYear, fetchAcadamicYear ,deleteAcadamicYear,updateAcadamicYear} from "../controllers/AcadamicYearController.js";
const academicYearRouter = Router();

academicYearRouter.post("/create", createAcadamicYear);
academicYearRouter.get('/',fetchAcadamicYear);
academicYearRouter.delete('/delete/:id', deleteAcadamicYear);
academicYearRouter.put('/update/:id', updateAcadamicYear);
export default academicYearRouter;