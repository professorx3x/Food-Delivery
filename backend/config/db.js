import mongoose from "mongoose";
export const connectDB=async()=>{
   await mongoose.connect('mongodb+srv://adityabharti32c:987654321@cluster0.76oexyn.mongodb.net/food-del').
   then(()=>console.log(" Aditya your DB connected"))
}