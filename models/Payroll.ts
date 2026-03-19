import mongoose,{Document,Schema} from "mongoose";

export interface IPayroll extends Document{
    employee:mongoose.Types.ObjectId;
    basicSalary:number;
    allowance:number;
    deduction:number;
    netSalary:number;
    payDate:Date;
}
const payrollSchema=new Schema<IPayroll>({
    employee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    basicSalary:{
        type:Number,
        required:true
    },
    allowance:{
        type:Number,
        
    },
    deduction:{
        type:Number,
        
    },
    netSalary:{
        type:Number,
        required:true
    },
    payDate:{
        type:Date,
        required:true
    },

},{timestamps:true});
export default mongoose.model<IPayroll>("Payroll",payrollSchema);