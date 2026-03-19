import mongoose,{Document,Schema} from "mongoose";
export interface IMessage extends Document{
    sender:mongoose.Types.ObjectId;
    receiver:mongoose.Types.ObjectId;
    messageText:string;
    date:Date;
    isRead:boolean;
}
const MessageSchema:Schema=new Schema({
    sender:{type:Schema.Types.ObjectId,ref:"User"},
    receiver:{type:Schema.Types.ObjectId,ref:"User"},
    messageText:{type:String,required:true},
    date:{type:Date,default:Date.now},
    isRead:{type:Boolean,default:false}
});
export default mongoose.model<IMessage>("Message",MessageSchema);