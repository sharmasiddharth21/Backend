//require('dotenv').config({path : './env'})

import mongoose from "mongoose";
import connectdb from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path: './env'
})


connectdb()
.then(() => {
    app.listen(process.env.PORT || 8000, () =>{
        console.log("server is listning to port")
    })
}
    
)

.catch((error) => {
    console.log("error in coonectiong express:" , error)
})