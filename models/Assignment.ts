import mongoose ,{Document,Schema} from "mongoose";
export interface Assignment extends Document{
    title:string;
    description?:string;
    dueDate:Date;
    class:mongoose.Types.ObjectId;
    subject:mongoose.Types.ObjectId;
    createdBy:mongoose.Types.ObjectId
}
const assignmentSchema=new Schema<Assignment>({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    dueDate:{
        type:Date,
        required:true
    },
    class:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Class",
        required:true
    },
    subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subject",
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true});
export default mongoose.model<Assignment>("Assignment",assignmentSchema);