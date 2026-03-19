import mongoose,{Document,Schema} from "mongoose";
export interface IStaff extends Document{
    user:mongoose.Types.ObjectId;
    department:string;
    salary:number;
    role:string;
}
const staffSchema=new Schema<IStaff>({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    department:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        required:true
    }
},{timestamps:true});
export default mongoose.model<IStaff>("Staff",staffSchema);