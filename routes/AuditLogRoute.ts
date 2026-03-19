import { Router } from "express";
import { 
    getAuditLogs,
    getAuditLogsByUserAgent,
    getAuditLogsBySessionId,
   getAuditLogsByIpAddress,
   getAuditLogsBySeverity,
   getAuditLogsByResource,
   getAuditLogsByAction,
   getAuditLogsByDateRange
    } from "../controllers/AuditLogController.js";
    
const auditlogRouter=Router();
 auditlogRouter.get("/",getAuditLogs);
 auditlogRouter.get("/useragent/:userAgent", getAuditLogsByUserAgent);
 auditlogRouter.get("/sessionid/:sessionId", getAuditLogsBySessionId);
 auditlogRouter.get("/ipaddress/:ipAddress", getAuditLogsByIpAddress);
 auditlogRouter.get("/severity/:severity", getAuditLogsBySeverity);
 auditlogRouter.get("/resource/:resource",getAuditLogsByResource);
 auditlogRouter.get("/action/:action",getAuditLogsByAction);
 auditlogRouter.get("/date/:startDate/:endDate", getAuditLogsByDateRange);
 export default auditlogRouter;
