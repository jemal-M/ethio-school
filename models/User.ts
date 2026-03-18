 import mongoose,{Document,Schema} from "mongoose";
 export interface IUser extends Document{
            name:string;
            email:string;
            password:string;
            role:string;
            profile_image?:string
 }

 const userSchema=new 
 Schema<IUser>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profile_image:{
        type:String,
    },
    role:{
        type:String,
        enum:["student","teacher","admin"],
        default:"student"
    }
 },{timestamps:true});

 export default mongoose.model<IUser>("User",userSchema);
