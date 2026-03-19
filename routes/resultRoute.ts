import { Router } from "express";
import { fetchResults,
    createResult,
    updateResult,
    deleteResult,
    fetchResultById } from "../controllers/ResultController.js";
 
 
const resultRouter=Router();
resultRouter.get('/',fetchResults);
resultRouter.post('/create', createResult);
resultRouter.put('/update/:id',updateResult);
resultRouter.delete('/delete/:id', deleteResult);
resultRouter.get('/:id', fetchResultById);
export default resultRouter;