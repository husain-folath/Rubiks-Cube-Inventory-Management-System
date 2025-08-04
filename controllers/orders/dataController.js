const Order= require("../../models/order")
const Product= require("../../models/product")

dataController={}

// Index
dataController.index= async (req,res,next)=>
{
    try {
        res.locals.data.orders= await Order.find({})
        //.populate("items").populate("role")
        next()
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

// Create
dataController.create= async (req,res,next) =>
{
    const product= await Product.findById(req.body.productId)
    const cost= product.price*req.body.quantity
    try {
        res.locals.data.order= await Order.create({
            items:[{
                product:req.body.productId,
                quantity:req.body.quantity
            }],
            cost,
            status:"pending",
            user:"6890935409174081267192b1"
            
        })
        next()
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

// Show
dataController.show= async (req,res,next)=>
{
    try {
        res.locals.data.order=await Order.findById(req.params.id).populate("items.product").populate("user")
        next()
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}
module.exports=dataController