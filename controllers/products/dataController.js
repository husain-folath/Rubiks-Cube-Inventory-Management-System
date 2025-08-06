const Product=require("../../models/product")
const Supplier= require("../../models/supplier")
const Order=require("../../models/order")
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
       const deletedProduct = await Product.findById(req.params.id);
        if (!deletedProduct) {
        return res.status(404).send("Product not found");
        }

        // Remove from Supplier
        const supplier = await Supplier.findById(deletedProduct.supplier);
        if (supplier) {
        supplier.products = supplier.products.filter(productId =>
            !productId.equals(deletedProduct._id)
        );
        await supplier.save();
        }

        // Remove from Orders
        const orders = await Order.find({});
        for (const order of orders) {
            const originalLength = order.items.length;
            order.items = order.items.filter(item =>
            !item.product.equals(deletedProduct._id)
            );

        if (order.items.length !== originalLength) {
            await order.save();
        }
        }

        // Delete Product
        await Product.findByIdAndDelete(req.params.id);

        next();

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
        res.locals.data.product= await Product.findById(req.params.id).populate("supplier")
        next()
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

module.exports= dataController