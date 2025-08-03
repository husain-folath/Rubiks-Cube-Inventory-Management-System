const express=require("express")
const router=express.Router()
const dataController=require("./dataController")
const viewController=require("./viewController")

// Index
router.get("/",dataController.index,viewController.index)

// New
router.get("/new",viewController.newView)
// Destroy

// Update

// Create
router.post("/", dataController.create, viewController.redirectHome)
// Edit

// Show


module.exports=router