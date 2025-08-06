const React =require("react")
const Layout=require("../layouts/Layout")

function Show (props)
{
    const token=props.token
    const {_id,name,description,price,stock, supplier, image}=props.product
    return(
        <Layout token={token}>
            <h1>Product: {name}</h1>
            <p>
                description: {description} <br />
                price: {price}<br />
                stock: {stock}<br />
                supplier: <a href={`/suppliers/${supplier._id}?token=${token}`}>{supplier.name}</a> <br />
                picture: <img src={image} alt={description} />
            </p>
            <form action={`/products/${_id}?_method=DELETE&token=${token}`} method="POST">
                <input type="submit" value="Delete Product" />
            </form>
            <a href={`/products/${_id}/edit?token=${token}`}><button>Edit Product</button></a> <br />
            <a href={`/products?token=${token}`}>Go Back</a>
        </Layout>
    )
}



module.exports=Show