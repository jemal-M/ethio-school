import mongoose,{Document,Schema} from "mongoose";
export interface ILesson extends Document{
    topic:string;
    content?:string;
    class:mongoose.Types.ObjectId;
    subject:mongoose.Types.ObjectId;
    teacher:mongoose.Types.ObjectId;
    date:Date

}
const LessonSchema:Schema=new Schema({
    topic:{type:String,required:true},
    content:{type:String},
    class:{type:Schema.Types.ObjectId,ref:"Class",required:true},
    subject:{type:Schema.Types.ObjectId,ref:"Subject",required:true},
    teacher:{type:Schema.Types.ObjectId,ref:"Teacher",required:true},
    date:{type:Date,default:Date.now}
})

export default mongoose.model<ILesson>("Lesson",LessonSchema);