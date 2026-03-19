import mongoose,{Document,Schema} from "mongoose";
export interface IAssetAllocation extends Document{
    asset:mongoose.Types.ObjectId;
    allocatedTo:mongoose.Types.ObjectId;
    allocationDate:Date;
    returnDate?:Date;
    conditionAtAllocation:string;
    conditionAtReturn?:string;
    remarks?:string;
}
const assetAllocationSchema=new Schema<IAssetAllocation>({
    asset:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Asset",
        required:true
    },
    allocatedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    allocationDate:{
        type:Date,
        required:true
    },
    returnDate:{
        type:Date
    },
    conditionAtAllocation:{
        type:String,
        required:true
    },
    conditionAtReturn:{
        type:String
    },
    remarks:{
        type:String
    }
},{timestamps:true});
export default mongoose.model<IAssetAllocation>("AssetAllocation",assetAllocationSchema);