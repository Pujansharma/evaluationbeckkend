const express=require("express");
const {connection}=require("./config/config")
const{todorouter}=require("./routes/users")
const{postroute}=require("./routes/post")
const{autentication}=require("./authontication/autentication")
const app=express();
const cors=require("cors");
app.use(cors())
app.use(express.json());
app.use("/todo",todorouter);
app.use(autentication);
app.use("/newpost",postroute);
app.listen(7000,async()=>{
    try {
        await connection;
        console.log("connect to database");
    } catch (error) {
        console.log(error.message);
    }
    console.log(`server is running in portrt}`);
})