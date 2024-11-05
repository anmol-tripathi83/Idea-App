// Start the server(it require express)

const express = require("express");

const app = express();

app.listen(8000, ()=>{
    console.log("App started on the port num",8000);
});