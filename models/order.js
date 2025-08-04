const mongoose=require("mongoose")

const orderSchema =mongoose.Schema({
    items:[{type:mongoose.Schema.Types.ObjectId,ref:"Product",quantity}],
    cost:{type:Number,required:true},
    status:{type:String,required:true},
    role:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true}
})

const order= mongoose.model("Order",orderSchema)

module.exports=order