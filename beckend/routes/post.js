
const express=require("express");
const {postmodle}=require("../modle/post.modle");
const postroute=express.Router();
// const bcrypt=require("bcrypt");
// const jwt=require("jsonweb
postroute.get("/",async(res,req)=>{
    let query=req.query;
    try {
        const user=await postmodle.find(query);
        res.send(user)
    } catch (error) {
        res.send(error)
    }
});
postroute.post("/post",async(req,res)=>{
    let payload=req.body;
    try {
        const user=new postmodle(payload);
        await user.save();
        res.send({"msg":"new register has added"})
    } catch (error) {
        ({"msg":"some thing went wrong","err":error.message})
    }
})
postroute.patch("/update/:id",async(req,res)=>{
    const ID=req.params.id
    let payload=req.body;
    try {
        await postmodle.findByIdAndUpdate({_id:ID},payload)
        res.send({"msg":"new register has been updated"})
    } catch (error) {
        ({"msg":"some thing went wrong"})
    }
});
postroute.patch("/update/:id",async(req,res)=>{
    const ID=req.params.id
    try {
        await postmodle.findByIdAndDelete({_id:ID})
        res.send({"msg":" register has been detelet"})
    } catch (error) {
        ({"msg":"some thing went wrong"})
    }
})

module.exports={
    postroute
}