const React = require("react"); 
const Layout = require("../layouts/Layout");

function Edit(props) {
    const token = props.token;
    const order = props.order;
    const products = props.products;

    return (
        <Layout token={token}>
            <div id="orderContainerEdit">
                <h1 id="orderTitleEdit">Order ID: {order._id.toString()}</h1>
                <p className="orderUserEdit">Made by: {order.user.name}</p>

                {/* Update status and existing items */}
                <form id="orderFormEdit" action={`/orders/${order._id}?_method=PUT&token=${token}`} method="POST">
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

                    <h3 id="orderItemsTitleEdit">Existing Items:</h3>
                    {order.items.length > 0 ? order.items.map((item) => (
                        <div key={item.product._id} className="orderItemEdit">
                            <a className="orderProductLinkEdit" href={`/products/${item.product._id}?token=${token}`}>
                                {item.product.name}
                            </a> -
                            Quantity: <input type="number" name={`quantity_${item.product._id}`} defaultValue={item.quantity} min={1} />
                            <label>
                                Delete? <input type="checkbox" name={`delete_${item.product._id}`} />
                            </label>
                        </div>
                    )) : (
                        <p>No items found</p>
                    )}

                    <div className="formBtnCenter">
                        <input className="orderBtnEdit" type="submit" value="Update Status / Quantities" />
                    </div>
                </form>

                {/* Add new product */}
                <form id="orderAddFormEdit" action={`/orders/${order._id}/edit?_method=PUT&token=${token}`} method="POST">
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
                    <div className="formBtnCenter">
                        <input className="orderBtnEdit" type="submit" value="Add Product" />
                    </div>
                </form>

                {/* Delete & Go Back Buttons */}
                <div className="orderBottomBtnsEdit">
                    <form id="orderDeleteFormEdit" action={`/orders/${order._id}?_method=DELETE&token=${token}`} method="POST">
                        <input className="orderBtnDeleteEdit" type="submit" value="Delete Order" />
                    </form>
                    <a className="orderReturnLinkEdit" href={`/orders/${order._id}?token=${token}`}>
                        <button type="button" className="orderReturnBtnEdit">Go Back</button>
                    </a>
                </div>
            </div>
        </Layout>
    );
}

module.exports = Edit;
