import mongoose,{Document,Schema} from "mongoose";
export interface ISetting extends Document{
    key:string;
    value:string
}
export interface ISettingInput{
    key:string;
    value:string
}
const settingSchema=new Schema<ISetting>({
    key:{
        type:String,
        required:true,
        unique:true
    },
    value:{
        type:String,
        required:true
    }
},{timestamps:true});
export default mongoose.model<ISetting>("Setting",settingSchema);