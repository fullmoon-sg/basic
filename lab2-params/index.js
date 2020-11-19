
const express = require("express");

let app = express();

app.get("/hi/:name", (req,res) => {
    let name = req.params.name;
    res.send("Hi " + name);
})

app.get('/number/:num', function(req,res){
// whatever we as a route parameter is ALWAYS a string
    let num = parseInt(req.params.num)
    num = ((num + 50) / 2) % 3;
    res.send("Hello there, the num is " + num + "");
});

app.listen(3000, ()=>{
    console.log("Server is listening at port 3000")
})