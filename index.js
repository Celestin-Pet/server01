

import express from "express"
const app = express()
app.get("/" , (req, res)=>{
    res.send("hey , am peter celéstin this is the first server i have been  create ")

});

const port = 3000;
app.listen(port, ()=>{
    console.log("the server is created");
} );
