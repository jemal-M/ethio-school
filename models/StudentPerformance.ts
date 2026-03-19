import mongoose,{Document,Schema} from "mongoose";
export interface IStudentPerformance extends Document{
    student:mongoose.Types.ObjectId;
    subject:mongoose.Types.ObjectId;
    examType:'mid'|'final';
    marks:number;
    outOf:number;
}
const studentPerformanceSchema=new Schema<IStudentPerformance>({
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required:true
    },
    subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subject",
        required:true
    },
    examType:{
        type:String,
        enum:['mid','final'],
        required:true
    },
    marks:{
        type:Number,
        required:true
    },
    outOf:{
        type:Number,
        required:true
    }
},{timestamps:true});
export default mongoose.model<IStudentPerformance>("StudentPerformance",studentPerformanceSchema);