const express=require("express")
const db=require("./db.json")

 const app=express()
app.use(express.json())

app.get("/products",(req,res)=>{
    res.send(db.products)
})

app.get("/",(req,res)=>{
    res.send("home page")
})
app.listen(8000,()=>{
    console.log("Listening to 8000 server")
})