const mongoose=require("mongoose");
mongoose.set('strictQuery', false);
const connection=mongoose.connect("mongodb+srv://pujansharma:pujansharma@cluster0.epdy6qd.mongodb.net/evaluation?retryWrites=true&w=majority");

module.exports={connection};