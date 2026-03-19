import mongoose,{Document,Schema} from "mongoose";
export interface IStudyMaterial extends Document{
    title:string;
    subject:mongoose.Types.ObjectId;
    class:mongoose.Types.ObjectId
    file:{url:string,path:string};
    uploadedBy:mongoose.Types.ObjectId;
}
const studyMaterialSchema=new Schema<IStudyMaterial>({
    title:{
        type:String,
        required:true
    },
    subject:{
        type:Schema.Types.ObjectId,
        ref:"Subject",
        required:true
    },
    class:{
        type:Schema.Types.ObjectId,
        ref:"Class",
        required:true
    },
    file:{
        url:{type:String,required:true},
        path:{type:String,required:true}
    },
    uploadedBy:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true});
export default mongoose.model<IStudyMaterial>("StudyMaterial",studyMaterialSchema);