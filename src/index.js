//require('dotenv').config({path : './env'})

import mongoose from "mongoose";
import connectdb from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path: './env'
})


connectdb();