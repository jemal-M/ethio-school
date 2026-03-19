import mongoose,{Document,Schema} from "mongoose";
export interface IVehicle extends Document{
    vehicleModel:string;
    plateNumber:string;
    driver:mongoose.Types.ObjectId;
    route:mongoose.Types.ObjectId;
    capacity:number;
}
const vehicleSchema=new Schema<IVehicle>({
    vehicleModel:{
        type:String,
        required:true
    },
    plateNumber:{
        type:String,
        required:true,
        unique:true
    },
    driver:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Driver",
        required:true
    },
    route:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Route",
        required:true
    }
},{timestamps:true});
export default mongoose.model<IVehicle>("Vehicle",vehicleSchema);