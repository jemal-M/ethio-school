 import mongoose,{Document,Schema} from "mongoose";
 import bcrypt from "bcryptjs";
 
 export interface IUser extends Document{
            name:string;
            email:string;
            password:string;
            role:string;
            profile_image?:string;
            comparePassword(candidatePassword: string): Promise<boolean>;
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

 // Add comparePassword method to the schema
 userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
     return bcrypt.compare(candidatePassword, this.password);
 };

 export default mongoose.model<IUser>("User",userSchema);
