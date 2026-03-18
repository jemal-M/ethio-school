import mongoose,{Document,Schema} from "mongoose";
 
 export interface IClass extends Document{
     name:string;
     section?:string;
     acadamicYear?:mongoose.Types.ObjectId
 }
 const classSchema=new Schema<IClass>({
     name:{
         type:String,
         required:true
     },
     section:{
         type:String
     },
     acadamicYear:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"AcadamicYear"
     }
 },{timestamps:true});
 export default mongoose.model<IClass>("Class",classSchema);