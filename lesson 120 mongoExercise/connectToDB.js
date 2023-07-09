const mongoose = require ('mongoose');

const ENVIRONMENT = "dev";

const user = "kimkroll2000";
const password = "kim123";

const connectToDb = async () => {
    
    try {
        if(ENVIRONMENT === "dev"){
             await mongoose.connect("mongodb://127.0.0.1:27017/store");
            console.log("Connected to database - MongoDB");
        }
       else if(ENVIRONMENT === "prod"){
            await mongoose.connect(`mongodb+srv://${user}:${password}@hackeru-classbase.xtlr0jm.mongodb.net/`);
            console.log("Connected to Atlas Cloud");
       }
    } catch (error){
        console.log("Failed to connect: ", error);
    }
}
module.exports = connectToDb;