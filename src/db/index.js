import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const  connectdb  = async () => {
    try{
        const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`/n mongodb connected !! DB host${connectioninstance.connection.host}`)
    } 
    catch(error){
        console.error("error :" , error);
        process.exit(1)
    }
}

export default connectdb; 