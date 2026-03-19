import { Router } from "express";
import { createRole, fetchRoles,updateRole,deleteRole } from "../controllers/RoleController.js";
 
 
const roleRouter=Router();
roleRouter.get('/',fetchRoles);
roleRouter.post('/create', createRole);
roleRouter.put('/update/:id', updateRole);
roleRouter.delete('/delete/:id', deleteRole);
export default roleRouter;