const express = require("express")
const router = express.Router()
const dataController = require("./dataController")
const viewController = require("./viewController")
const productsViewController = require("../../controllers/products/viewController")


//for signing up
router.get("/signup", viewController.signUp) // page
router.post("/signup", dataController.createUser, viewController.redirectSignIn) //functionality

// for signing in
router.get("/signin", viewController.signIn)  // page
router.post("/signin", dataController.loginUser, productsViewController.redirectHome) //functionality 


module.exports = router