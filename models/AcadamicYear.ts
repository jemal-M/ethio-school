import mongoose,{Document,Schema} from "mongoose";
export interface IAcadamicYear extends Document{
    name:string;
    startDate:Date;
    endDate:Date;
    isActive:boolean;
}
const acadamicYearSchema=new Schema<IAcadamicYear>({
    name:{
        type:String,
        required:true,
        unique:true
    },
    startDate:{
        type:Date,
        required:true,
    },
    endDate:{
        type:Date,
        required:true
    },
    isActive:{
        type:Boolean,
        default:false
    }
},{timestamps:true});
export default mongoose.model<IAcadamicYear>("AcadamicYear",acadamicYearSchema);