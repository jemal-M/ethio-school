import mongoose,{Document,Schema} from "mongoose";
export interface IPermission extends Document{
    name:string;
    description?:string;
}
const permissionSchema=new Schema<IPermission>({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String
    }
},{timestamps:true});

 export default mongoose.model<IPermission>("Permission",permissionSchema);