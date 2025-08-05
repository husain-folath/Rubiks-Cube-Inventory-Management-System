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
router.put("/:id",dataController.update,viewController.redirectShow)
// Update add more
router.put("/:id/edit",dataController.updateAddMore,viewController.redirectShow)
// Create
router.post("/", dataController.create,viewController.redirectShow)
// Edit 
router.get("/:id/edit", productDataController.index,dataController.show,viewController.edit)
// Show
router.get("/:id", productDataController.index,dataController.show,viewController.show)

module.exports=router