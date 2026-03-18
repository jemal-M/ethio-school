import mongoose,{Document,Schema} from "mongoose";
 export interface ITeacher extends Document{
     user:mongoose.Types.ObjectId;
     subject?:string;
     qualification?:string;
     salary?:number
 }
 
 const teacherSchema=new Schema<ITeacher>({
     user:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"User",
         required:true
     },
     subject:{
         type:String,
     },
     qualification:{
         type:String,
     },
     salary:{
         type:Number,
     }
 },{timestamps:true});
 
 export default mongoose.model<ITeacher>("Teacher",teacherSchema);