const dotEnv = require("dotenv")
dotEnv.config() // ise bina variable me store kie bhi just in a single line bhi kar sakte hai
const app = require("./src/app")


const dbConnect = require("./src/db/dbConnect")
// database connection function calling here
dbConnect()

const port = process.env.PORT

function startServer() {
    try{
        app.listen(port, () => {
            console.log(`Server is Running at port ${port}`)
        })
    }catch(err){
        console.log(`Server Problem- Not Running: ${err}`)
    }
   
}


// server is started 
startServer() 