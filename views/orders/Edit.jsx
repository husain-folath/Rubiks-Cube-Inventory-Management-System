const React = require("react"); 
const Layout=require("../layouts/Layout")

function Edit(props) {
    const token= props.token
    const order = props.order;
    const products = props.products;

    return (
        <Layout token={token}>
            <h1>Order ID: {order._id.toString()}</h1>
            <p>Made by: {order.user.name}</p>

            {/* Form to update status and existing items */}
            <form action={`/orders/${order._id}?_method=PUT&token=${token}`} method="POST">
                <label>Status:
                    <select name="status" defaultValue={order.status}>
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </label>
                <br /><br />

                <h3>Existing Items:</h3>
                {order.items.length > 0 ? order.items.map((item, index) => (
                    <div key={item.product._id}>
                        <a href={`/products/${item.product._id}?token=${token}`}>{item.product.name}</a> -
                        Quantity: <input type="number" name={`quantity_${item.product._id}`} defaultValue={item.quantity} min={1} />
                        <label>
                            Delete? <input type="checkbox" name={`delete_${item.product._id}`} />
                        </label>
                    </div>
                )) : (
                    <p>No items found</p>
                )}
                <br />

                <input type="submit" value="Update Status / Quantities" />
            </form>

            <br /><br /><br />

            {/* Form to add a new product to the order */}
            <form action={`/orders/${order._id}/edit?_method=PUT&token=${token}`} method="POST">
                <label>
                    Add Product:
                    <select name="productId" required>
                        <option value="">Select a product</option>
                        {products.map(product => (
                            <option key={product._id} value={product._id}>{product.name}</option>
                        ))}
                    </select>
                </label>
                Quantity: <input type="number" name="quantity" min={1} defaultValue={1} />
                <br />
                <input type="submit" value="Add Product" />
            </form>

            <br /><br /><br />

            {/* Delete Order */}
            <form action={`/orders/${order._id}?_method=DELETE&token=${token}`} method="POST">
                <input type="submit" value="Delete Order" />
            </form>

            <br />
            <a href={`/orders/${order._id}?token=${token}`}>Go Back</a>
        </Layout>
    );
}

module.exports = Edit;
