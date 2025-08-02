const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    name:{type:String,required:true,unique:true},
    description: String,
    price:{type:Number,required:true},
    stock:{type:Number,default:0},
    image:String
})


module.exports= mongoose.model("Product",productSchema)