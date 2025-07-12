import express from "express"
import cors from "cors"
import dotenv from "dotenv"


dotenv.config()

const app= express();
const PORT =process.env.PORT || 5000

//middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello from agunan")
})

app.listen(PORT,(req,res)=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})