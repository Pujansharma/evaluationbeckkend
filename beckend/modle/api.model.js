const mongoose=require("mongoose");
// const mongoose=require("mongoose");
mongoose.set('strictQuery', false);
const connection=mongoose.connect("mongodb+srv://pujansharma:pujansharma@cluster0.epdy6qd.mongodb.net/evaluation?retryWrites=true&w=majority");

const userschema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    gender:{type:String,required:true},
    pass:{type:String,required:true},
    age:{type:Number,required:true},
    city:{type:String,required:true},
})

const apimodel=mongoose.model("evaluationdata",userschema);

module.exports={
    apimodel,
    connection
};