import mongoose,{Document,Schema} from "mongoose";
export interface IResult extends Document{
    student:mongoose.Types.ObjectId;
    subject:mongoose.Types.ObjectId;
    class:mongoose.Types.ObjectId;
    acadamicYear:mongoose.Types.ObjectId;
    grade:string;
    marks:number;
}
const resultSchema=new Schema<IResult>({
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required:true
    },
    subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subject",
        required:true
    },
    class:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Class",
        required:true
    },
    acadamicYear:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"AcademicYear",
        required:true
    },
    grade:{
        type:String,
        required:true
    },
    marks:{
        type:Number,
        required:true
    }
},{timestamps:true});
export default mongoose.model<IResult>("Result",resultSchema);