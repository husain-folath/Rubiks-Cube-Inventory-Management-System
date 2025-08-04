const express= require("express")
const router= express.Router()
const dataController=require("./dataController")
const viewController=require("./viewController")


router.get("/signin",viewController.SignIn) 

module.exports= router