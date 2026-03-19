import { Router } from "express";
import { createInventoryItem,getAllInventoryItems,updateInventoryItem,deleteInventoryItem} from "../controllers/InventoryItemcontroller.js";

     
const inventoryItemRouter=Router();
inventoryItemRouter.get("/",getAllInventoryItems);
inventoryItemRouter.post("/create", createInventoryItem);
inventoryItemRouter.put("/update/:id", updateInventoryItem);
inventoryItemRouter.delete("/delete/:id", deleteInventoryItem);
export default inventoryItemRouter;