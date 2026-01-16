import express from "express"

const app = express();
const port = 3000;

app.get("/",(req, res)=>{
    res.send("ciao")
})

app.listen(port,()=>{
    console.log(`il server è in ascolto sulla porta ${port}`)
})