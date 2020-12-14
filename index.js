const express = require("express")
app = new express()
const port=8080

app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.send("/public/index.html")
})
app.listen(port,()=>console.log(`server avviato sulla porta ${port}`))