import { Router } from "express";
import { 
    createPermission,
    fetchPermission,
    
    updatePermission,
    deletePermission
 } from "../controllers/PermissionController.js";
 
const permissionRouter=Router();
 
permissionRouter.get('/',fetchPermission);
permissionRouter.post('/create', createPermission);
permissionRouter.put('/update/:id', updatePermission);
permissionRouter.delete('/delete/:id', deletePermission);
export default permissionRouter;
