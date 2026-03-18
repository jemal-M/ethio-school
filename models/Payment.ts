import mongoose,{Document,Schema} from "mongoose";
export interface IPayment extends Document{
    student:mongoose.Types.ObjectId;
    amount:number;
    methode:string;
    status:'paid'|'unpaid';
}
const paymentSchema=new Schema<IPayment>({
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    methode:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['paid','unpaid'],
        required:true
    }
},{timestamps:true});
export default mongoose.model<IPayment>("Payment",paymentSchema);