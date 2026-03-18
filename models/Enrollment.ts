import mongoose,{Document,Schema} from "mongoose";
export interface IEnrollment extends Document{
    student:mongoose.Types.ObjectId;
    academicYear:mongoose.Types.ObjectId;
    class:mongoose.Types.ObjectId;
}
const enrollmentSchema=new Schema<IEnrollment>({
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required:true
    },
    academicYear:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"AcademicYear",
        required:true
    },
    class:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Class",
        required:true
    },
},{timestamps:true});
export default mongoose.model<IEnrollment>("Enrollment",enrollmentSchema);