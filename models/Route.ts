import mongoose,{Document,Schema} from "mongoose";
export interface IRoute extends Document{
    name:string;
    stops:[{stopName:string;stopId:mongoose.Types.ObjectId}];
}
const routeSchema=new Schema<IRoute>({
    name:{
        type:String,
        required:true,
        unique:true
    },
    stops:[{
        stopName:{type:String},
        stopId:{type:mongoose.Types.ObjectId,ref:"Stop"}
    }]
},{timestamps:true});

export default mongoose.model<IRoute>("Route",routeSchema);