const Supplier=require("../../models/supplier")
const Product=require("../../models/product")
const dataController={}

// Index
dataController.index=async (req,res,next) => {

    try {
        res.locals.data.suppliers=await Supplier.find({})
        next()
    } catch (error) {
        res.status(400).send({message:error.message})
    }
    
}
// Destroy
dataController.destroy= async (req,res,next)=>
{
    try {
        console.log("delete me")
        const supplier =await Supplier.findById(req.params.id)

        if (supplier.products.length > 0) {
            console.log("deleted product")
            await Product.deleteMany({ _id: { $in: supplier.products } })
        }
        await Supplier.findByIdAndDelete(req.params.id)
        next()
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

// Update
dataController.update= async (req,res,next) =>
{
    try {
        res.locals.data.supplier= await Supplier.findByIdAndUpdate(req.params.id,req.body,{new:true})
        next()
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

//create

dataController.create= async (req,res,next) =>
{
    try {
        res.locals.data.supplier= await Supplier.create(req.body)
        next()
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

// Show
dataController.show= async (req,res,next)=>
{
    try {
        res.locals.data.supplier=await Supplier.findById(req.params.id).populate("products")
        next()
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

module.exports=dataController