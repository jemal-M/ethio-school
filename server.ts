import express from "express";
import cors from "cors"
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import attendanceRouter from "./routes/attendanceRouter.js";
import roleRouter from "./routes/roleRoute.js";
import permissionRouter from "./routes/permissionroute.js";
import classRouter from "./routes/classRoute.js";
import emailLogRouter from "./routes/emailLogRoute.js";
import assignmentSubmissionRouter from "./routes/AssignmentSubmssionRoute.js";
import studentRouter from "./routes/studentRouter.js";
import teacherRouter from "./routes/teacherRoute.js";
import studentPurformanceRouter from "./routes/studentPurformanceRoute.js";
import teacherPurformanceRouter from "./routes/teacherPurformanceRoute.js";
import subjectRouter from "./routes/subjectRoute.js";
import staffRouter from "./routes/staffRoute.js";
import studentMaterialroute from "./routes/studentMaterialroute.js";
import payrollRouter from "./routes/payrollRoute.js";
import paymentRouter from "./routes/paymentRoute.js";
import lessonRouter from "./routes/lessonRoute.js";
import notificationRouter from "./routes/notificationRoute.js";
import medicalRecordRouter from "./routes/medicalRecordRoute.js";
import inventoryItemRouter from "./routes/inventortItemroute.js";
import auditlogRouter from "./routes/AuditLogRoute.js";
import academicYearRouter from "./routes/acadanicYearRoute.js";
import { getMe, login, register } from "./controllers/AuthController.js";

const app = express();
 const Port=process.env.PORT || 5000;
 connectDB(); 
app.use(cors());
app.use("/api/users",userRouter);
app.use('/api/attendance',attendanceRouter);
app.use("/api/roles",roleRouter)
app.use('/api/permissions',permissionRouter);
app.use('/api/class',classRouter);
app.use('/api/email_logs',emailLogRouter);
app.use("/api/assignment/submissions",assignmentSubmissionRouter);
app.use("/api/students",studentRouter);
app.use("/api/teachers",teacherRouter);
app.use("/api/student_purformances",studentPurformanceRouter);
app.use("/api/teacher_purformances",teacherPurformanceRouter);
app.use("/api/subjects",subjectRouter);
app.use("/api/staffs",staffRouter);
app.use("/api/student_materials",studentMaterialroute);
app.use("/api/payrolls",payrollRouter);
app.use("/api/payments",paymentRouter);
app.use("/api/lessons",lessonRouter);
app.use("/api/notifications",notificationRouter);
app.use("/api/medical_records",medicalRecordRouter);
app.use("/api/inventory_items",inventoryItemRouter);
app.use("/api/audit_logs",auditlogRouter);
app.use("/api/acadamic_years",academicYearRouter);
app.use("/api/login",login);
app.use("/api/register",register);
app.use("/api/me",getMe);
app.listen(Port,()=>{
    console.log('');
    
})