import { Router } from "express";
import { fetchUser,createUser,deleteUser,updateUser } from "../controllers/UserController.js";
const userRouter=Router();
 userRouter.get('/',fetchUser);
 userRouter.post('/create', createUser);
 userRouter.delete('/delete/:id', deleteUser);
 userRouter.patch('/update/:id', updateUser);
 export default userRouter;
