const express = require("express");

const app = express();

const users = [{name : "Mustafa", age: 26, job: "Developer"}, {name : "Arife", age: 25, job: "Paramedic"}];

const PORT = 5000;

app.get("/users",(req, res, next) => {
    res.json(users);
});

app.listen(PORT, ()=>{
    console.log("Server Started: " + PORT);
});