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
router.delete("/:id", dataController.destroy, viewController.redirectHome)
// Update
router.put("/:id",dataController.updateAddMore,viewController.redirectShow)
// Create
router.post("/", dataController.create,viewController.redirectShow)
// Edit 
// Show
router.get("/:id", productDataController.index,dataController.show,viewController.show)

module.exports=router