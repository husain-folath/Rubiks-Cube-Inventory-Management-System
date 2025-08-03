const Supplier=require("../../models/supplier")

const dataController={}

dataController.index=async (req,res,next) => {

    try {
        res.locals.data.suppliers=await Supplier.find({})
        next()
    } catch (error) {
        res.status(400).send({message:error.message})
    }
    
}

dataController.create= async (req,res,next) =>
{
    try {
        res.locals.data.supplier= await Supplier.create(req.body)
        next()
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

module.exports=dataController