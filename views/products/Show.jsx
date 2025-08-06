const React = require("react")
const Layout = require("../layouts/Layout")

function Show(props) {
    const token = props.token
    const { _id, name, description, price, stock, supplier, image } = props.product
    return (
        <Layout token={token}>
            <h1 id="productNameShow">{name}</h1>
            <div id="productContainerShow">
                <div>

                    <p id="productDetailsShow">
                        <strong>description: </strong> {description} <br /><br />
                        <strong> price:</strong>  {price}<br /><br />
                        <strong> stock:</strong>  {stock}<br /><br />
                        <strong> supplier:</strong>  <a id="productSupplierLinkShow" href={`/suppliers/${supplier._id}?token=${token}`}>{supplier.name}</a> <br />
                    </p>
                    <div id="productBtnsBarShow">
                        <a href={`/products?token=${token}`}><button id="productReturnBtnShow">Return</button></a>
                        <a href={`/products/${_id}/edit?token=${token}`}><button id="productEditBtnShow"> Edit</button></a> <br />
                        <form action={`/products/${_id}?_method=DELETE&token=${token}`} method="POST">
                            <input type="submit" value=" Delete" id="productDeleteBtnShow" />
                        </form>
                    </div>
                </div>
                <div>
                    <img src={image} alt={description} id="productImgShow" />
                </div>
            </div>
        </Layout>
    )
}



module.exports = Show