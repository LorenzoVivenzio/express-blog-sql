import express from "express"
import connection from "./data/db.js";
import blogRouter from "./Routers/blog.js"


const app = express();
const port = 3000;

app.use("/posts", blogRouter)


app.listen(port, () => {
    console.log(`il server è in ascolto sulla porta ${port}`)
})