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
                <ul className="ordersListIndex">
                    {orders.length > 0 ? (
                        orders.map(order => (
                            <li key={order._id} className="orderItemIndex">
                                Order: <a className="orderLinkIndex" href={`/orders/${order._id}?token=${token}`}>ID: {`${order._id}`}</a>
                            </li>
                        ))
                    ) : (
                        <li>No Orders Found</li>
                    )}
                </ul>
            </div>
        </Layout>
    );
}

module.exports = Index;
