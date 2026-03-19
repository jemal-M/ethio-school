import mongoose,{Document,Schema} from "mongoose";
export interface ISystemLog extends Document{
    action:string;
    description:string;
    user:mongoose.Types.ObjectId;
}
const systemLogSchema=new Schema<ISystemLog>({
    action:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});
export default mongoose.model<ISystemLog>("SystemLog",systemLogSchema);