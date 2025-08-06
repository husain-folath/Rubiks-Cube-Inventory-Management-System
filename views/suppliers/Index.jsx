const React = require("react");
const Layout = require("../layouts/Layout");

function Index(props) {
    const token = props.token;
    const suppliers = props.suppliers;

    return (
        <Layout token={token}>
            <div id="suppliersContainerIndex">
                <h1 id="suppliersTitleIndex">Suppliers Index</h1>
                <a className="supplierAddLinkIndex" href={`/suppliers/new?token=${token}`}>Add Supplier</a>
                <div className="suppliersListIndex">
                    {suppliers.length > 0 ? (
                        suppliers.map(supplier => (
                            <div key={supplier._id} className="supplierItemIndex">
                                Supplier: <a className="supplierLinkIndex" href={`suppliers/${supplier._id}?token=${token}`}>{supplier.name}</a>
                                <div id="supplierDetailsShow">
                                    <p>Email: {supplier.email}</p>
                                    <p>Contact: {supplier.contact}</p>
                                    <p>
                                        Products:
                                        <ul id="supplierProductsListShow">
                                            {supplier.products && supplier.products.length > 0 ? (
                                                supplier.products.map(product => (
                                                    <li key={product._id}>
                                                        <a className="supplierProductLinkShow" href={`/products/${product._id}?token=${token}`}>{product.name}</a>
                                                    </li>
                                                ))
                                            ) : (
                                                <li>No Products Found</li>
                                            )}
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>No Suppliers Found</div>
                    )}
                </div>
            </div>
        </Layout>
    );
}

module.exports = Index;
