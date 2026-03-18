import mongoose,{Document,Schema} from "mongoose";
export interface IStudent extends Document{
    user:mongoose.Types.ObjectId;
    class:mongoose.Types.ObjectId;
    rollNumber?:string;
    guardianName?:string;
    guardianPhone?:string;
}
const studentSchema=new Schema<IStudent>({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    class:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Class",
        required:true
    },
    rollNumber:{
        type:String,
    },
    guardianName:{
        type:String,
    },
    guardianPhone:{
        type:String,
    }
},{timestamps:true});
export default mongoose.model<IStudent>("Student",studentSchema);