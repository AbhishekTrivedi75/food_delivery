import mongoose from "mongoose";

export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://abhishektrivedi3064:LmZluNsW5ezbcddI@fooddel.somq1.mongodb.net/fooddel')
    .then(()=>{
        console.log("DB connected")
    })
}