//const { default: Header } = require("../../frontend/src/Components/User/Header/Header")
const {register, login}=require("../Controllers/userController")
const express=require("express")
const router=express.Router()

router.post('/register',register)
router.post('/login',login)
router.post("/upload",appDetails.fields([
    {name:"appfile",maxCount:1},
    {name:"appIcon",maxCount:1},
    {name:"appScreanshots",maxCount:1},
]),appUpload);

//router.get("/header",Header)


module.exports=router