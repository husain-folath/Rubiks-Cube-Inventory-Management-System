const express=require("express")
const router=express.Router()
const dataController=require("./dataController")
const viewController=require("./viewController")
const userDataController= require("../users/dataController")

// Index
router.get("/",userDataController.auth,dataController.index,viewController.index)
// New
router.get("/new",userDataController.auth,viewController.newView)
// Destroy
router.delete("/:id",userDataController.auth, dataController.destroy,viewController.redirectHome)
// Update
router.put("/:id",userDataController.auth, dataController.update , viewController.redirectShow)
// Create
router.post("/", userDataController.auth,dataController.create, viewController.redirectHome)
// Edit
router.get("/:id/edit", userDataController.auth,dataController.show,viewController.edit)
// Show
router.get("/:id", userDataController.auth,dataController.show,viewController.show)

module.exports=router