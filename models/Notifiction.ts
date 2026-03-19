import mongoose,{Document,} from "mongoose";
export interface INotification extends Document{
     title:string;
     description:string;
     date:Date;
     isRead:boolean;
 }
 
const NotificationSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    date:{type:Date,default:Date.now()},
    isRead:{type:Boolean,default:false}
})
export default mongoose.model<INotification>("Notification",NotificationSchema);