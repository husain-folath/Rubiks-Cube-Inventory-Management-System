const React = require("react")

function index (props)
{
    const products= props.products
    const token=props.token
    return(
        <div>
            <p><a href={`/suppliers?token=${token}`}>Go To Suppliers</a> <a href={`/orders?token=${token}`}>Go To Orders</a> {props.token?<a href="/users/signin">Sign Out</a>:<a href="/users/signin">Sign In</a>}</p>
            <h1>Avialable Products:</h1>
            <a href={`/products/new?token=${token}`}>Add a new product</a> <br />
            <ul>
                {
                    products.map(product=>{
                        return(
                            <p>
                                name: <a href={`/products/${product._id}?token=${token}`}>{product.name} </a><br/>
                                description: {product.description}<br/>
                                price: {product.price}<br/>
                                stock: {product.stock}<br/>
                            </p>
                        )
                    })
                }
            </ul>
        </div>
    )
}

module.exports=index