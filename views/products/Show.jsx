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
                        <strong>description: </strong> {description} <br />
                        <strong> price:</strong>  {price}<br />
                        <strong> stock:</strong>  {stock}<br />
                        <strong> supplier:</strong>  <a href={`/suppliers/${supplier._id}?token=${token}`}>{supplier.name}</a> <br />
                    </p>
                </div>
                <div>
                    <img src={image} alt={description} id="productImgShow" />
                </div>
            </div>
            <form action={`/products/${_id}?_method=DELETE&token=${token}`} method="POST">
                <input type="submit" value="Delete Product" />
            </form>
            <a href={`/products/${_id}/edit?token=${token}`}><button>Edit Product</button></a> <br />
            <a href={`/products?token=${token}`}>Go Back</a>
        </Layout>
    )
}



module.exports = Show