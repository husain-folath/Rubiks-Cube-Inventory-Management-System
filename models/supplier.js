const mongoose=require("mongoose")

const supplierSchema= mongoose.Schema({
    name:{type:String,required:true,unique:true},
    contact:{type:Number,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    products:[{type:mongoose.Schema.Types.ObjectId,ref:"Product"}]
})



module.exports= mongoose.model("Supplier",supplierSchema)