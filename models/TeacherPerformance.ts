import mongoose,{Document,Schema} from "mongoose";
export interface ITeacherPerformance extends Document{
    teacher:mongoose.Types.ObjectId;
    subject:mongoose.Types.ObjectId;
    class:mongoose.Types.ObjectId;
    academicYear:mongoose.Types.ObjectId;
    performance:number;

}
const TeacherPerformanceSchema=new Schema<ITeacherPerformance>({
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Teacher",
        required:true
    },
    subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subject",
        required:true
    },
    class:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Class",
        required:true
    },
    academicYear:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"AcademicYear",
        required:true
    },
    performance:{type:Number,required:true}
})
export default mongoose.model<ITeacherPerformance>("TeacherPerformance",TeacherPerformanceSchema);