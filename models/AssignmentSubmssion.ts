import mongoose,{Document,Schema} from "mongoose";
export interface IAssignmentSubmission extends Document{
    assignment:mongoose.Types.ObjectId;
    student:mongoose.Types.ObjectId;
    fileUrl:string;
    submissionDate:Date;
    grade:number
}
 
const assignmentSubmissionSchema=new Schema<IAssignmentSubmission>({
    assignment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Assignment",
        required:true
    },
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required:true
    },
    fileUrl:{
        type:String,
        required:true
    },
    submissionDate:{
        type:Date,
        required:true
    },
    grade:{
        type:Number,
        required:true
    }
},{timestamps:true});

 export default mongoose.model<IAssignmentSubmission>("AssignmentSubmission",assignmentSubmissionSchema);