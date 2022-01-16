const express = require('express')
const req = require('express/lib/request')
const app = express()
app.get("/",(req,res)=>{
    res.send("<h1>Hello This is Home Page</h1>")
})
app.get("/about",(req,res)=>{
    res.status(200).send("<h1>Hello This is About Page</h1>")
})
app.get("/contact",(req,res)=>{
    res.status(200).send("<h1>Hello This is Contact Page</h1>")
})
app.get("/profile",(req,res)=>{
    name=req.query.name
    salary = req.query.salary
    city = req.query.city
    res.send(req.query)
    //res.send(`<h1>Hello This is Profile Page of ${name} and salary = ${salary} and city = ${city}</h1>`)
})
app.get("**",(req,res)=>{
    res.status(404).send("<h1>404!!!Page not Found</h1>")
})
app.listen(8000,()=>{
    console.log("Server is Running\nwaiting for client on Port 8000");
})