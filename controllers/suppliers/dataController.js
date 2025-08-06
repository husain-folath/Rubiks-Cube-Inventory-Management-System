const Supplier = require("../../models/supplier")
const Product = require("../../models/product")
const Order = require("../../models/order")
const dataController = {}

// Index
dataController.index = async (req, res, next) => {

    try {
        res.locals.data.suppliers = await Supplier.find({})
        next()
    } catch (error) {
        res.status(400).send({ message: error.message })
    }

}
// Destroy
dataController.destroy = async (req, res, next) => {
    try {
        const orders = await Order.find({});
        const supplier = await Supplier.findById(req.params.id);

        if (!supplier) {
            return res.status(404).send("Supplier not found");
        }

        if (supplier.products.length > 0) {
            for (const order of orders) {
                const originalLength = order.items.length;

                // Filter out all items whose product is in supplier.products
                order.items = order.items.filter(item =>
                    !supplier.products.some(productId =>
                        productId.equals(item.product)
                    )
                );

                if (order.items.length !== originalLength) {
                    await order.save();
                }
            }

            // Delete all products associated with the supplier
            await Product.deleteMany({ _id: { $in: supplier.products } });
        }

        // Delete the supplier itself
        await Supplier.findByIdAndDelete(req.params.id);

        next();

    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

// Update
dataController.update = async (req, res, next) => {
    try {
        res.locals.data.supplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, { new: true })
        next()
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

//create

dataController.create = async (req, res, next) => {
    try {
        res.locals.data.supplier = await Supplier.create(req.body)
        next()
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

// Show
dataController.show = async (req, res, next) => {
    try {
        res.locals.data.supplier = await Supplier.findById(req.params.id).populate("products")
        next()
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

module.exports = dataController