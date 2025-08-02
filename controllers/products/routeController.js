const express=require("express")
const router=express.Router()
const viewController=require("./viewController")
const dataController=require("./dataController")

// Index 
router.get("/",dataController.index,viewController.index)
// New
router.get("/new",viewController.newView)
// Destroy
// Update
// Create
router.post("/", dataController.create, viewController.redirectHome)
// Show

module.exports=router