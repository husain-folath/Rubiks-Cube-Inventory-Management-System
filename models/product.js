const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: String,
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    image: String,
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier", required: true }
})

const Product = mongoose.model("Product", productSchema)
module.exports = Product