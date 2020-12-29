const express = require("express")
app = new express()
const port=8080
const fun =require ("./functions/functions.js")
app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.send("/public/index.html")
})
app.get("/eta",(req,res)=>{
    const anni=req.query.anni
    const nome=req.query.nome
    res.send(`<h1>Sei maggiorenne o minorenne?</h1>
    <b>${fun.saluti(nome)} <br>hai ${anni} anni quindi ${fun.maggiorenne(anni)}`)
})

app.listen(port,()=>console.log(`server avviato sulla porta ${port}`))