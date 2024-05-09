const appModel = require("../Models/appModel")
const userModel=require("../Models/userModel")
const path=require("path")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const maxAge=24*60*60

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRETE_KEY,{
        expiresIn:maxAge,
    });
};

module.exports.register=async(req,res)=>{
    console.log(req.body,"!!!!!");
    try{
        const{email,password,username,contactNo}=req.body;

        const emailExist =await userModel.findOne({email:email});
        const contactExist = await userModel.findOne({contactNo:contactNo});
        if(emailExist && contactExist){
            return res.json({message:"Email or contact number already exists", status:false});
        }
        const newUser=new userModel({
            username:username,
            email:email,
            password:password,
            contactNo:contactNo,
        });
        const userDetails = await newUser.save();
        const token = createToken(userModel._id);
        return res.json({
            message:"Account created successfully",
            status:true,
            token,
        });
    }catch(error){
        console.log(error);
        return res.json({message:"Internal server in sign up", status:false});
    }
};

module.exports.login=async(req,res)=>{
    try{
        console.log(req.body);
        const{username,password}=req.body;

        const emailExist=await userModel.findOne({email:username});
        console.log(emailExist);
        if(emailExist){
            const passwordExist=await bcrypt.compare(password,emailExist.password);
            if(passwordExist){
                const token = createToken(userModel._id);
                return res.json({
                    user:emailExist,
                    message:"Successfully logged in",
                    status:true,
                    token,
                });
            }else{
                return res.json({message:"Incorrect Password", status:false});
            }
        }else{
            return res.json({message:"Username not found",status:false});
        }  
    }catch(error){
        console.log(error);
    }
};

module.exports.appUpload=async(req,res)=>{
    try {
        const extractImageUrl = (fullPath) => {
          const relativePath = path.relative("public/images", fullPath);
          const imageUrl = relativePath.replace(/\\/g, "/");
          return imageUrl;
        };
    
        const appFile=req.files.appFile.map(file => file.path)
        const appIcon=req.files.appIcon.map(file => file.path)
        const appScreenshots=req.files.appScreenshots.map(file => file.path)
    
        console.log(extractImageUrl(appFile[0]),"HEhehehehe");
        console.log(req.body,"this is body");
       
        const applicationDetails=new appModel({
            userId:userId,
            appName:req.body.appName,
            appDescription:req.body.appDescription,
            apkFile:extractImageUrl(appFile[0]),
            devName:req.body.devloperName,
            publisherName:req.body.publisherName,
            category:req.body.category,
            appScreenshots:extractImageUrl(appScreenshots[0]),
            appIcon:extractImageUrl(appIcon[0]),
        })
        const data=await applicationDetails.save()
        console.log(data,"!!!!!!!!!");
        return res.json({message:"App uploaded successfully",status:true})
        
      } catch (error) {
        console.log(error);
      }
};

module.exports.Header=async(req,res)=>{
    try{
        const userDetails=req.user;
        return res.json({status:true,user:userDetails});
    }catch(error){
        console.log(error);
        return res.json({message:"Internal server error", status:false});
    }
};