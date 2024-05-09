const mongoose=require("mongoose")
const bcrypt =require("bcrypt")

const appSchema=new mongoose.Schema({
    appName:{
        type:String,
        required:true,
    },
    appDesc:{
        type:String,
        required:true,
    },
    devName:{
        type:String,
        required:true,
    },
    publisherName:{
        type:String,
        required:true,
    },
    appCategory:{
        type:String,
        required:true,
    },
    appIcon:{
        type:String,
        required:true,
    },
    appScreenshot:{
        type:String,
        required:true,
    },
    appFile:{
        type:String,
        required:true,
    },
    verified:{
        type:String,
        required:false,
    },
    date:{
        type:Date,
        default:Date.now,
    },
});

module.exports=new mongoose.model("app",appSchema);