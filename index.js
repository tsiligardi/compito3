const express = require("express")
app = new express()
const port=8080
/*const functions= require("./functions/functions.js") 
let { maggiorenne , saluti } =functions*/
var maggiorenne =require ("./functions/functions.js")
app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.send("/public/index.html")
})
app.get("/eta",(req,res)=>{
    const anni=req.query.anni
    const stringa=maggiorenne(anni)
    res.send(`<h1>Sei maggiorenne o minorenne?</h1>
    <b>hai ${anni} anni quindi ${stringa}`)
})

app.listen(port,()=>console.log(`server avviato sulla porta ${port}`))