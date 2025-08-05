const express=require("express")
const router= express.Router()
const dataController=require("./dataController")
const viewController=require("./viewController")
const productDataController=require("../products/dataController")
const userDataController= require("../users/dataController")

// Index
router.get("/",userDataController.auth,dataController.index,viewController.index)
// new
router.get("/new",userDataController.auth,productDataController.index,viewController.newView)
// Destroy
router.delete("/:id", userDataController.auth,dataController.destroy, viewController.redirectHome)
// Update
router.put("/:id",userDataController.auth,dataController.update,viewController.redirectShow)
// Update add more
router.put("/:id/edit",userDataController.auth,dataController.updateAddMore,viewController.redirectShow)
// Create
router.post("/", userDataController.auth,dataController.create,viewController.redirectShow)
// Edit 
router.get("/:id/edit", userDataController.auth,productDataController.index,dataController.show,viewController.edit)
// Show
router.get("/:id", userDataController.auth,productDataController.index,dataController.show,viewController.show)

module.exports=router