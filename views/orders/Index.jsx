const React = require("react");
const Layout = require("../layouts/Layout");

function Index(props) {
    const token = props.token;
    const orders = props.orders;

    return (
        <Layout token={token}>
            <div id="ordersContainerIndex">
                <h1 id="ordersTitleIndex">Orders Index</h1>
                <a className="orderAddLinkIndex" href={`/orders/new?token=${token}`}>Add New Order</a>
                
                {orders.length > 0 ? (
                    <table className="ordersTableIndex">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Status</th>
                                <th>User</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order._id} className="orderRowIndex">
                                    <td>{`${order._id}`}</td>
                                    <td>{order.status}</td>
                                    <td>{order.user ? order.user.name : "Unknown"}</td>
                                    <td>
                                        <a className="orderLinkIndex" href={`/orders/${order._id}?token=${token}`}>View</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="noOrdersMessage">No Orders Found</p>
                )}
            </div>
        </Layout>
    );
}

module.exports = Index;
