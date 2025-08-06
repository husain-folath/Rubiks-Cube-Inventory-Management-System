const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true },
    }],
    cost: { type: Number, required: true },
    status: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
})

const order = mongoose.model("Order", orderSchema)

module.exports = order