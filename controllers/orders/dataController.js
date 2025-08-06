const Order = require("../../models/order")
const Product = require("../../models/product")

dataController = {}

// Index
dataController.index = async (req, res, next) => {
    try {
        res.locals.data.orders = await Order.find({})
            .populate("items").populate("user")
        next()
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

// Destroy
dataController.destroy = async (req, res, next) => {
    try {
        res.locals.data.order = await Order.findByIdAndDelete(req.params.id)
        next()
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}
// Update
dataController.update = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id).populate("items.product");
        order.cost = 0
        // Update status
        if (req.body.status) {
            order.status = req.body.status;
        }

        // Update quantities and remove items
        const updatedItems = [];

        for (const item of order.items) {
            const productId = item.product._id.toString();
            if (req.body[`delete_${productId}`]) {
                continue; // Skip item if marked for deletion
            }
            const newQty = parseInt(req.body[`quantity_${productId}`]);
            if (!isNaN(newQty)) {
                updatedItems.push({ product: item.product._id, quantity: newQty });
            }
            order.cost = parseFloat(order.cost) + parseFloat(item.product.price) * parseFloat(newQty)
        }

        order.items = updatedItems;
        await order.save();

        res.locals.data.order = order;
        next();
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

// Update add more
dataController.updateAddMore = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id)
        const productId = req.body.productId
        const product = await Product.findById(req.body.productId)
        const quantity = req.body.quantity
        const item = { product: productId, quantity: parseFloat(quantity) }
        const existingitem = order.items.find(item => item.product.toString() === productId)

        if (existingitem) {
            existingitem.quantity = parseInt(existingitem.quantity) + parseInt(quantity)
        }
        else {
            order.items.addToSet({
                product: productId,
                quantity: quantity
            })
        }
        console.log(item.quantity)
        // console.log(order.cost)
        // console.log(product.price)
        console.log(quantity)
        order.cost = parseInt(order.cost) + parseInt(product.price) * parseInt(quantity)
        res.locals.data.order = await order.save()

        // res.locals.data.order= await Order.findByIdAndUpdate(req.params.id,
        //     {
        //     $addToSet:{items:item}
        //     },
        //     {new:true})
        next()
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}
// Create
dataController.create = async (req, res, next) => {
    const product = await Product.findById(req.body.productId)
    const cost = product.price * req.body.quantity
    try {
        res.locals.data.order = await Order.create({
            items: [{
                product: req.body.productId,
                quantity: req.body.quantity
            }],
            cost,
            status: "pending",
            user: "6890935409174081267192b1"

        })
        next()
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

// Show
dataController.show = async (req, res, next) => {
    try {
        res.locals.data.order = await Order.findById(req.params.id).populate("items.product").populate("user")
        next()
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}
module.exports = dataController