

import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

 
export const connectDB = async() => {
    try {
         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
          console.log(`\n MongoDB Connected ! DB Host ${connectionInstance.connection.host}`)
        //   console.log("connection Instance log : ", connectionInstance)
    } catch (error) {
        console.error("MongoDb connection FIELD : " , error )
        process.exit(1) //matter of node js 
    }   
}

