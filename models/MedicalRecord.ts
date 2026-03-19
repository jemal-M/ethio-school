import mongoose,{Document,Schema} from "mongoose";
export interface IMedicalrecord extends Document{
    student:mongoose.Types.ObjectId;
    disease:string;
    treatment:string;
    note?:string;
    date:Date;
}
const MedicalRecordSchema:Schema=new Schema({
    student:{type:Schema.Types.ObjectId,ref:"Student",required:true},
    disease:{type:String,required:true},
    treatment:{type:String,required:true},
    note:{type:String},
    date:{type:Date,default:Date.now}
})
export default mongoose.model<IMedicalrecord>("MedicalRecord",MedicalRecordSchema);