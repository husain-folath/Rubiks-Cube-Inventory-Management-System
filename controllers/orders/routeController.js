const express=require("express")
const router= express.Router()
const dataController=require("./dataController")
const viewController=require("./viewController")
const productDataController=require("../products/dataController")
// Index
router.get("/",dataController.index,viewController.index)
// new
router.get("/new",productDataController.index,viewController.newView)
// Destroy
// Update
// Create
router.post("/", dataController.create,viewController.redirectShow)
// Edit 
// Show
router.get("/:id", dataController.show,viewController.show)

module.exports=router