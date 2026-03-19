import mongoose,{Document,Schema} from "mongoose";
export interface IAuditLog extends Document{
    user:mongoose.Types.ObjectId;
    action:string;
    table:string;
    description:string;
}
const auditLogSchema=new Schema<IAuditLog>({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    action:{
        type:String,
        required:true
    },
    table:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true});
export default mongoose.model<IAuditLog>("AuditLog",auditLogSchema);