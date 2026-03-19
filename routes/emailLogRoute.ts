import { Router } from "express";
const emailLogRouter=Router();
import { getAllEmailLogs,getEmailLogsByCategory ,getEmailLogsByPriority,
    getEmailLogsByRecipient,
    getEmailLogsByService,
    getEmailLogsByStatus,
    getEmailLogsBySubject,
    getEmailLogsByUserId,
    

} from "../controllers/EmailLogController.js";
emailLogRouter.get('/',getAllEmailLogs);
emailLogRouter.get('/:category', getEmailLogsByCategory);
emailLogRouter.get('/:priority',getEmailLogsByPriority);
emailLogRouter.get('/:reciepient',getEmailLogsByRecipient);
emailLogRouter.get('/:service', getEmailLogsByService);
emailLogRouter.get('/:status', getEmailLogsByStatus);
emailLogRouter.get('/:subject', getEmailLogsBySubject);
emailLogRouter.get('/:userId', getEmailLogsByUserId);

export default emailLogRouter;