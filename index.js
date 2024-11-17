// Start the server(it require express)

const express = require("express");

const app = express();
app.use(express.json());

// stitching the route here (connnecting the route to the server) => i.e, require will return the function in idea.routes and it take the app as an argument
require("./routes/idea.routes")(app);

app.listen(8000, ()=>{
    console.log("App started on the port num",8000);
});