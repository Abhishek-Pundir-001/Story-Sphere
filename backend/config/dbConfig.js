import mongoose from "mongoose";

export const connectToDb = async () => {
  const { connection } =  await mongoose.connect('mongodb+srv://abhishekpundirnnt:fxNkVdnrNBEpLESO@cluster0.sdjdo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
     try{
        if(connection){
            console.log('connected to DB:',connection.host)
        }
     } 
     catch(e){
        console.log(e)
        process.exit(1)
     }     

}
// mongodb+srv://abhishekpundirnnt:<db_password>@cluster0.sdjdo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

