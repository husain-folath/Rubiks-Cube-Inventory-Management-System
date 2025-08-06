const React = require("react");
const Layout = require("../layouts/Layout");

function NewView(props) {
    const token = props.token;
    const products = props.products;

    return (
        <Layout token={token}>
            <div id="orderContainerNew">
                <h1 id="orderTitleNew">Add a New Order</h1>
                <form id="orderFormNew" action={`/orders?token=${token}`} method="POST">
                    <label>
                        Product:
                        <select name="productId" required>
                            <option value="">Select a product</option>
                            {products.map(product => (
                                <option key={product._id} value={product._id}>{product.name}</option>
                            ))}
                        </select>
                    </label>
                    Quantity: <input type="number" name="quantity" min={1} defaultValue={1} />
                    <input className="orderBtnAddNew" type="submit" value="Add Product" />
                </form>

                <a className="orderReturnLinkNew" href={`/orders?token=${token}`}>Go Back</a>
            </div>
        </Layout>
    );
}

module.exports = NewView;
