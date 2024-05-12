//const { default: Header } = require("../../frontend/src/Components/User/Header/Header")
const {register, login,appUpload}=require("../Controllers/userController")
//const userAuth=require("../Middleware/userAuth")
const createMulterInstance=require("../Middleware/multer")
const express=require("express")
const router=express.Router()
const appDetails=createMulterInstance("AppDetails")

router.post('/register',register)
router.post('/login',login)
router.post("/upload",appDetails.fields([
    {name:"appfile",maxCount:1},
    {name:"appIcon",maxCount:1},
    {name:"appScreanshots",maxCount:1},
]),appUpload);

//router.get("/header",Header)


module.exports=router