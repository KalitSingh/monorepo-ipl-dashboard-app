const mongoose = require("mongoose") 

async function dbConnect(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Db Connected Succesfully !")
    }catch(err){
        console.log(`Database Connection Faliure ! ${err}`)
    }
}


module.exports = dbConnect