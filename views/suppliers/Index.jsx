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
                <ul className="suppliersListIndex">
                    {suppliers.length > 0 ? (
                        suppliers.map(supplier => (
                            <li key={supplier._id} className="supplierItemIndex">
                                Supplier: <a className="supplierLinkIndex" href={`suppliers/${supplier._id}?token=${token}`}>{supplier.name}</a>
                            </li>
                        ))
                    ) : (
                        <li>No Suppliers Found</li>
                    )}
                </ul>
            </div>
        </Layout>
    );
}

module.exports = Index;
