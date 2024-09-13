const mongoose=require('mongoose');
//it is mongodb connection url
//const mongoUrl='mongodb://localhost:27017/myDatabase';
const mongoUrl='mongodb+srv://uditsaini86072:Saini1234@cluster0.gaa43.mongodb.net/';
//set up mongodb connsection
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
//defines the db object
const db=mongoose.connection;

db.on('connected',()=>{
    console.log("Connection established");
})
db.on('disconnected',()=>{
    console.log("Connection Terminated");
})
db.on('error',(err)=>{
    console.log("Error Occur",err);
})
module.exports=db;


