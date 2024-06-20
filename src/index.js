import { config } from "./config/config.js";
import connection from "./config/db.js";
import app from "./app.js";

const PORT = config.port;

connection.connect((error)=>{
    if(error){
        console.error(`Error connecting... ${error.stack}`);
        return;
    }
    console.log(`Connection as id ${connection.threadId}`);
})

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`);
});