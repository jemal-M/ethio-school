import mongoose,{Document,Schema} from "mongoose";
export interface IAttendance extends Document{
    student:mongoose.Types.ObjectId;
    status:'present'|'absent';
    date:Date;
}
const attendanceSchema=new Schema<IAttendance>({
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required:true
    },
    status:{
        type:String,
        enum:['present','absent'],
        required:true
    },
    date:{
        type:Date,
        required:true
    }
},{timestamps:true});
export default mongoose.model<IAttendance>("Attendance",attendanceSchema);