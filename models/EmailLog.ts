import mongoose,{Document,Schema} from "mongoose";
export interface IEmailLog extends Document{
    recipient:string;
    subject:string;
    body:string;
    status:'sent'|'failed';
}
const emailLogSchema=new Schema<IEmailLog>({
    recipient:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['sent','failed'],
        default:'sent'
    }
},{timestamps:true});
export default mongoose.model<IEmailLog>("EmailLog",emailLogSchema);