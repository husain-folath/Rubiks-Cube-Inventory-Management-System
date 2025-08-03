const Product=require("../../models/product")
const Supplier= require("../../models/supplier")
const dataController={}

// Index
dataController.index= async (req,res,next)=>
{
    try {
        res.locals.data.products= await Product.find({})
        next()
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}
// Destory
dataController.destroy= async (req,res,next)=>
{
    try {
        await Product.findByIdAndDelete(req.params.id)
        next()
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

// Update
dataController.update= async (req,res,next)=>
{
    try {
        res.locals.data.product= await Product.findByIdAndUpdate(req.params.id ,req.body, {new:true})
        next()
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

// create
dataController.create=async (req,res,next)=>
{
    try {
       res.locals.data.product= await Product.create(req.body)
       const supplier= await Supplier.findById(req.body.supplier)
       supplier.products.addToSet(res.locals.data.product._id)
       await supplier.save()
       next()
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

// Show
dataController.show=async (req,res,next)=>
{
    try {
        res.locals.data.product= await Product.findById(req.params.id)
        next()
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

module.exports= dataController