const mongoose=require("mongoose");
// const mongoose=require("mongoose");
mongoose.set('strictQuery', false);
const connection=mongoose.connect("mongodb+srv://pujansharma:pujansharma@cluster0.epdy6qd.mongodb.net/evaluation?retryWrites=true&w=majority");

const userschema=mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    device:{type:String,required:true},
    no_if_comments:{type:Number,required:true},
})

const postmodle=mongoose.model("postdata",userschema);

module.exports={
    postmodle,
    connection
};