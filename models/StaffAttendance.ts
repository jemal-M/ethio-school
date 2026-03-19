import mongoose,{Document,Schema} from "mongoose";
 
export interface IStaffAttendance extends Document{
    employee:mongoose.Types.ObjectId;
    status:'present'|'absent'|'leave';
    date:Date;
}
const staffAttendanceSchema=new Schema<IStaffAttendance>({
    employee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    status:{
        type:String,
        enum:['present','absent','leave'],
        required:true
    },
    date:{
        type:Date,
        required:true
    }
},{timestamps:true});
export default mongoose.model<IStaffAttendance>("StaffAttendance",staffAttendanceSchema);