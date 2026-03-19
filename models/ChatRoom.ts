import mongoose,{Document,Schema} from "mongoose";
export interface IChatRoom extends Document{
    name:string;
    participants:mongoose.Types.ObjectId[];
}
const chatRoomSchema=new Schema<IChatRoom>({
    name:{
        type:String,
        required:true,
    },
    participants:{
        type:[mongoose.SchemaTypes.ObjectId],
        ref:"User"
    }
},{timestamps:true});
  export default mongoose.model<IChatRoom>("ChatRoom",chatRoomSchema);

