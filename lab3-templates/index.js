const express = require("express");
const hbs = require("hbs");

//create the express application
let app = express();
//tell express which template engine to use
//template aka views in express
//hbs is abbreviation for handle bars

app.set("view engine","hbs"); //by default, express will look for it at view folder

app.use(express.static("public"))

//<----end Express setup...............>

app.get("/", (req,res) => {
    res.render("index.hbs");
})

//colon : stands for placeholder
app.get("/hi/:name", (req,res)=> {

    let name = req.params.name;
    let luckyNumber = Math.floor(Math.random() * 100);
    res.render('hi.hbs', {
        'username' : name,
        'luckyNumber' : luckyNumber
    })
})

app.listen(3000, () => {
    console.log("The server is running")
});
