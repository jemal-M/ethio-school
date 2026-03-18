import mongoose,{Document,Schema} from "mongoose";
export interface ISubject extends Document{
    name:string;
    class:mongoose.Types.ObjectId;
    teacher?:mongoose.Types.ObjectId;
}
const subjectSchema=new Schema<ISubject>({
    name:{
        type:String,
        required:true,
        unique:true
    },
    class:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Class",
        required:true
    },
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Teacher",
    },
},{timestamps:true});
export default mongoose.model<ISubject>("Subject",subjectSchema);