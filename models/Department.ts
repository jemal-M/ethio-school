import mongoose,{Document,Schema} from "mongoose";
export interface IDepartment extends Document{
    name:string;
    head:mongoose.Types.ObjectId;
}
const departmentSchema=new Schema<IDepartment>({
    name:{
        type:String,
        required:true,
        unique:true
    },
    head:{
        type:Schema.Types.ObjectId,
        ref:"Teacher",
        required:true
    }
},{timestamps:true});
export default mongoose.model<IDepartment>("Department",departmentSchema);