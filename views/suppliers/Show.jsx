const React = require("react");
const Layout = require("../layouts/Layout");

function Show(props) {
    const token = props.token;
    const { _id, name, contact, email, products } = props.supplier;

    return (
        <Layout token={token}>
            <div id="supplierContainerShow">
                <h1 id="supplierTitleShow">Supplier: {name}</h1>
                <div id="supplierDetailsShow">
                    <p>Email: {email}</p>
                    <p>Contact: {contact}</p>
                    <p>
                        Products:
                        <ul id="supplierProductsListShow">
                            {products.length > 0 ? products.map(product => (
                                <li key={product._id}>
                                    <a className="supplierProductLinkShow" href={`/products/${product._id}?token=${token}`}>{product.name}</a>
                                </li>
                            )) : <li>No Products Found</li>}
                        </ul>
                    </p>
                </div>



                <div id="supplierBtnsBarShow">
                    <a className="supplierReturnLinkShow" href={`/suppliers?token=${token}`}><button className="supplierReturnBtnShow">Go Back</button></a>
                    <a href={`/suppliers/${_id}/edit?token=${token}`}>
                        <button className="supplierEditBtnShow">Edit Supplier</button>
                    </a>
                    <form id="supplierDeleteFormShow" action={`/suppliers/${_id}?_method=DELETE&token=${token}`} method="POST">
                        <input className="supplierBtnDeleteShow" type="submit" value="Delete Supplier" />
                    </form>
                </div>
            </div>
        </Layout>
    );
}

module.exports = Show;
