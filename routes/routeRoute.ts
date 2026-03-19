import { Router } from "express"; 
import { getRoutes,deleteRoute,getRouteById,createRoute,updateRoute } from "../controllers/RouteController.js";
const routeRouter = Router();
routeRouter.get("/", getRoutes);
routeRouter.post("/create", createRoute);
routeRouter.delete("/delete/:id", deleteRoute);
 routeRouter.put("/update/:id", updateRoute);
 routeRouter.get("/:id", getRouteById);
export default routeRouter;