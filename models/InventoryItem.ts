import mongoose,{Document,Schema} from "mongoose";
export interface IInventoryItem extends Document{
    name:string;
    quantity:number;
    category:string;
}
const inventoryItemSchema=new Schema<IInventoryItem>({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    }
});
export default mongoose.model<IInventoryItem>("InventoryItem",inventoryItemSchema);