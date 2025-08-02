const Product=require("../../models/product")

const dataController={}

dataController.index= async (req,res,next)=>
{
    try {
        res.locals.data.products= await Product.find({})
        next()
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

dataController.create=async (req,res,next)=>
{
    try {
       res.locals.data.product= await Product.create(req.body)
       next()
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}


module.exports= dataController