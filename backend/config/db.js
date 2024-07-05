import mongoose from "mongoose";
export const connectDB=async()=>{
   await mongoose.connect('mongodb+srv://bhartiaditya0412:987654321@cluster0.gflzrw1.mongodb.net/?/food-del').
   then(()=>console.log(" Aditya your DB connected"))
}
