import mongoose from 'mongoose'

const connectDB=async()=>{
    try{
         await mongoose.connect(`${process.env.MONGO_URI}/creutoTask`)
         console.log("mongodb connected successfully")
    }catch(error){
        console.log("mongoDb connection failed",console.error);
        
    }
}

export default connectDB