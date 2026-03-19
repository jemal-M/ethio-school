import { Router } from "express";
import { getPayments,
    createPayment,
    updatePayment,
    deletePayment } from "../controllers/Paymentcontroller.js";
const paymentRouter=Router();
paymentRouter.get("/",getPayments);
paymentRouter.post("/create", createPayment);
paymentRouter.put("/update/:id", updatePayment);
paymentRouter.delete("/delete/:id", deletePayment);
export default paymentRouter;
