const React = require("react");
const Layout = require("../layouts/Layout");

function Show(props) {
    const token = props.token;
    const order = props.order;
    const products = props.products;

    return (
        <Layout token={token}>
            <div id="orderContainerShow">
                <h1 id="orderTitleShow">Order ID: {`${order._id}`}</h1>
                <div id="orderDetailsShow">
                    <p><strong>Made by:</strong> {order.user.name}</p>
                    <p><strong>Cost:</strong> {order.cost}</p>
                    <p><strong>Status:</strong> {order.status}</p>
                    <p><strong>Items:</strong></p>
                    <ul id="orderItemsListShow">
                        {order.items.length > 0 ? order.items.map(item => (
                            <li key={item.product._id}>
                                <a className="orderProductLinkShow" href={`/products/${item.product._id}?token=${token}`}>{item.product.name}</a>, Quantity: {item.quantity}
                            </li>
                        )) : (
                            <li>No items found</li>
                        )}
                    </ul>
                </div>

                <form id="orderAddItemFormShow" action={`/orders/${order._id}/edit?_method=PUT&token=${token}`} method="POST">
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
                    <input className="orderBtnAddItemShow" type="submit" value="Add Product" />
                </form>


                <div id="orderBtnsBarShow">
                    <a className="orderReturnLinkShow" href={`/orders?token=${token}`}> <button className="orderReturnBtnShow" >Go Back</button></a>
                    <a href={`/orders/${order._id}/edit?token=${token}`}>
                        <button className="orderEditBtnShow">Edit Order</button>
                    </a>
                <form id="orderDeleteFormShow" action={`/orders/${order._id}?_method=DELETE&token=${token}`} method="POST">
                    <input className="orderBtnDeleteShow" type="submit" value="Delete Order" />
                </form>
                </div>
            </div>
        </Layout>
    );
}

module.exports = Show;
